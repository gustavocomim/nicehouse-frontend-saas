
import { CoreContext } from 'context/CoreContext';
import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { Create, Read, ReadOne, Update } from 'services/campaigns';
import { Create as CreateFile, Delete, Read as ReadFiles } from 'services/projects-files';
import { Read as ReadDeliveries } from 'services/deliveries';
import { exposeStrapiError, normalizeStrapiList, normalizeStrapiRegister, parseStrapiImage } from 'utils';
import { LABELS_BY_TYPE, moods } from 'utils/mock';
import { parseDatestringBRUS, parseDatestringUSBR } from 'utils/parsers';
import { toast } from 'react-toastify';

export default function useCampaing(){

    const params = useParams()

    const { form, user, assets } = useContext(CoreContext)

    const [currentCampaing, setCurrentCampaing] = useState(null)

    const [campaings, setCampaings] = useState([])
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [empty, setEmpty] = useState(true)

    const parseCampaing = item => {
        const currentMood = moods?.find(fnd => 
            fnd.details_history === item?.details_history ||
            fnd.details_testimonials === item?.details_testimonials ||
            fnd.details_media === item?.details_media ||
            fnd.other
        )

        return {
            ...item,
            label: LABELS_BY_TYPE[item?.status] || '',
            title: item?.name,
            text: item?.campaing_objective,
            date: !item?.expected_delivery_date ? null : parseDatestringUSBR(item?.expected_delivery_date),
            expected_delivery_date: !item?.expected_delivery_date ? null : parseDatestringUSBR(item?.expected_delivery_date),
            mood: currentMood,
            other: currentMood
        }
    }

    const parseAsset = item => {
        const normalFile = normalizeStrapiRegister(item?.file)
        return {
            ...normalFile,
            ...item,
        }
    }

    const parseDelivery = item => {
        const normalFile = normalizeStrapiRegister(item?.file)
        return {
            parsed_file: normalFile,
            status: item?.approved ? "Aprovado" : (item?.approved  === false ? "Reprovado" : "") , 
            image: normalFile?.url ? parseStrapiImage(normalFile?.url) : "" , 
            text: item?.message,
            ...normalFile,
            ...item,
        }
    }

    const save = async (upform) => {

        const payload = params?.id && upform ? {
            data: { ...upform }
        } : {
            data:{ 
                company_company: form?.company,
                company_email: form?.email,
                company_phone: form?.phone,
                company_brand_description: form?.description,

                name: form?.name,
                campaing_objective: form?.objective,
                target_audience: form?.target_public,
                main_message: form?.message,
                expected_delivery_date: form?.expectation ? parseDatestringBRUS(form?.expectation) : null,

                campaing_type: params?.type ? params?.type : null,
                campaing_budget: form?.budget,
                campaing_paymentDeadline: form?.paymentDeadline,
                campaing_duration: form?.duration,
                campaing_characteristics: form?.characteristics,
                campaing_campaingTheme: form?.campaingTheme,
                campaing_indicator: form?.successIndicator,
                campaing_restritions: form?.restritions,
                campaing_restritions_description: form?.restritions_description,
                campaing_allowed: form?.allowed,
                campaing_notalloed: form?.notalloed,


                campaing_videoSpecs: form?.videoSpecs,
                campaing_creative: form?.creative,
                campaing_tom: form?.tom,
                campaing_logistic: form?.logistic,
                campaing_videoObs: form?.videoObs,
                
                details_history:form?.other?.title === 'História',
                details_testimonials:form?.other?.title === 'Depoimento',
                details_media:form?.other?.title === 'Peça de mídia',
                details_others:form?.other_description,

                url_site_landing_page: form?.company_site,
                cta: form?.cta,
                special_requirement: form?.special,

                user: user?.id,
                status:"progress",
            }
        }
        setSaving(true)
        const result = !params?.id ? await Create(payload) : await Update(payload, params?.id)
        setSaving(false)

        if(result && !exposeStrapiError(result)){

            if(assets?.length && result?.data?.id){
                const promises = assets?.map(item => CreateFile({
                    data:{
                        campaign: result?.data?.id,
                        file: item?.id
                    }
                }) )
                await Promise.all(promises)
            }

            return true;
        }
        return false;
    }

    const init = useCallback(async () => {

        setLoading(true)
        const result = await Read(user?.id)
        setLoading(false)

        if(result && !exposeStrapiError(result)){
            const normalResult = normalizeStrapiList(result)
            setCampaings(normalResult?.map( parseCampaing ))
            if( !params?.id ){ setEmpty(!normalResult?.length) }
        }

        if( params?.id ){
            const sRegister = await ReadOne(params?.id)

            if(sRegister?.data?.id){
                const normalSReg = normalizeStrapiRegister(sRegister);
                const parsedCampaing = parseCampaing(normalSReg)

                const fResult = await ReadFiles(sRegister?.data?.id)
                const dResult = await ReadDeliveries(sRegister?.data?.id)

                const normalFResult = normalizeStrapiList(fResult)
                const normalDResult = normalizeStrapiList(dResult)

                const parsedFiles = normalFResult?.map(parseAsset)
                const parsedDeliveries = normalDResult?.map(parseDelivery)

                setEmpty(!parsedDeliveries?.length)
                
                setCurrentCampaing({
                    ...parsedCampaing,
                    assets: parsedFiles,
                    deliveries: parsedDeliveries
                })
            }
        }
    }, [ params, user ])

    const removeAsset = async id => {
        setLoading(true)
        const result = await Delete(id)
        if(result && !exposeStrapiError(result)){
            toast.success("Removido")
            init()
        }
    }

    useEffect(() => { init() ;}, [init])

    return {
        save,
        empty,
        loading,
        campaings,
        currentCampaing,
        reload: init,
        saving,
        removeAsset
    }
}