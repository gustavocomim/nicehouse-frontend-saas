import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  PanelForm,
  BodyPanel,
  UploadLabel,
  UploadContentIcon,
  UploadContentText,
  CheckText,
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";

import CampaingSelectType from "components/Dashboard/Campaing/SelectType";
import CampaingHeaderBread from "components/Dashboard/Campaing/HeaderBread";
import Input, { MaskedInput } from "components/Form/Input";
import { CoreContext } from "context/CoreContext";
import CampaingStepper from "components/Dashboard/Campaing/Stepper";

import Radio from "components/Form/Radio";
import CardAssets from "components/Cards/Assets";
import CardContentType from "components/Cards/ContentType";
import { campaingTypes, moods } from "utils/mock";
import CardKnowing from "components/Cards/Knowing";
import CardTerms from "components/Cards/Terms";
import CardUpload from "components/Cards/Upload";
import useCampaing from "hooks/useCampaing";
import { toast } from "react-toastify";

export default function DashboardCampaingCreate() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { type, step } = useParams();

  const { form, setForm, setAssets } = useContext(CoreContext);
  const formValue = (ref) => {
    return form?.[ref] ? form?.[ref] : "";
  };
  const changeForm = (value, ref) => {
    setForm({ ...form, [ref]: value });
  };

  const { loading, saving, save } = useCampaing();

  const steps = [
    { title: "Informações do negócio" },
    { title: "Detalhe do projeto" },
    { title: "Detalhes do conteúdo" },
    { title: "Informações adicionais" },
  ];

  const actions = [
    // { title:"CANCELAR", outline:true, action: () => navigate('dashboard/campaing/create') },
    {
      title: parseInt(step || 0) === 0 ? "CANCELAR" : "ANTERIOR",
      outline: true,
      action: () => back(),
    },
    {
      title: parseInt(step || 0) + 1 === steps?.length ? "SALVAR" : "PRÓXIMO",
      loadable: false,
      action: () => next(),
    },
  ];

  const next = async () => {
    if (parseInt(step || 0) + 1 === steps?.length) {
      if (!saving) {
        const success = await save();
        if (success) {
          setForm({});
          setAssets([]);
          toast.success("Campanha criada com sucesso");
          navigate(`dashboard/campaing`);
        }
      }
      return;
    }
    navigate(`dashboard/campaing/create/${type}/${parseInt(step || 0) + 1}`);
  };

  const back = () => {
    history.goBack();
  };

  return (
    <>
      <ContainerAuthenticated
        side={1}
        actions={!type ? null : actions}
        loading={loading || saving}
      >
        {!!type ? null : <CampaingSelectType campaings={campaingTypes} />}
        {!type ? null : (
          <>
            <CampaingHeaderBread
              title={campaingTypes?.find((f) => f.type === type)?.title}
              bread={["Campanhas", "Criar nova campanha"]}
            />
            <BodyPanel>
              {step ? null : (
                <>
                  <PanelForm>
                    <Input
                      label={"Nome da empresa *"}
                      placeholder="Digite o nome da empresa"
                      value={formValue("company")}
                      onChange={(e) => changeForm(e.target.value, "company")}
                    />
                    <Input
                      label={"E-mail de contato *"}
                      placeholder="Digite o e-mail de contato"
                      value={formValue("email")}
                      onChange={(e) => changeForm(e.target.value, "email")}
                    />
                    <MaskedInput
                      mask={"(99) 99999-9999"}
                      label={"Telefone de contato *"}
                      placeholder="DDD + Número"
                      value={formValue("phone")}
                      onChange={(e) => changeForm(e.target.value, "phone")}
                    />
                    <Input
                      type={"textarea"}
                      label={"Descreva brevemente seu produto ou marca *"}
                      placeholder="O que você quer destacar nesse projeto, pontos importantes e de destaque"
                      value={formValue("description")}
                      onChange={(e) =>
                        changeForm(e.target.value, "description")
                      }
                    />
                  </PanelForm>
                </>
              )}

              {!(parseInt(step) === 1) ? null : (
                <>
                  <PanelForm>
                    {type === "video-commerce" ? (
                      <>
                        <CardKnowing
                          formValue={formValue}
                          changeForm={changeForm}
                        />
                      </>
                    ) : null}

                    <Input
                      label={"Nome da campanha *"}
                      placeholder="Digite aqui o nome da campanha"
                      value={formValue("name")}
                      onChange={(e) => changeForm(e.target.value, "name")}
                    />
                    <Input
                      label={"Objetivo da campanha *"}
                      placeholder="Digite o objetivo da campanha"
                      value={formValue("objective")}
                      onChange={(e) => changeForm(e.target.value, "objective")}
                    />
                    <Input
                      type={"textarea"}
                      label={"Público alvo *"}
                      placeholder="Descreva as personas que melhor se identificam com o seu público (idade, sexo, grau de escolaridade, classe social, hábitos)"
                      value={formValue("target_public")}
                      onChange={(e) =>
                        changeForm(e.target.value, "target_public")
                      }
                    />

                    {type === "creative-ads" ? (
                      <>
                        <Input
                          type={"textarea"}
                          label={"Mensagem principal"}
                          placeholder="Tem alguma mensagem ou argumento que não pode faltar no vídeo?"
                          value={formValue("message")}
                          onChange={(e) =>
                            changeForm(e.target.value, "message")
                          }
                        />
                        <MaskedInput
                          mask={"99/99/9999"}
                          label={"Expectativa de data de entrega *"}
                          placeholder=""
                          value={formValue("expectation")}
                          onChange={(e) =>
                            changeForm(e.target.value, "expectation")
                          }
                        />
                      </>
                    ) : null}

                    {type === "pontual-campaing" ? (
                      <>
                        <Input
                          label={"Budget *"}
                          placeholder="Qual o valor disponível para criação da campanha? (Ex: R$ 30.000,00)"
                          value={formValue("budget")}
                          onChange={(e) => changeForm(e.target.value, "budget")}
                        />
                        <MaskedInput
                          mask={"99/99/9999"}
                          label={"Prazo do pagamento *"}
                          placeholder=""
                          value={formValue("paymentDeadline")}
                          onChange={(e) =>
                            changeForm(e.target.value, "paymentDeadline")
                          }
                        />
                        <MaskedInput
                          mask={"99/99/9999"}
                          label={"Duração da campanha *"}
                          placeholder="Ex: 7 dias"
                          value={formValue("duration")}
                          onChange={(e) =>
                            changeForm(e.target.value, "duration")
                          }
                        />
                        <Input
                          type={"textarea"}
                          label={"Características dos criadores *"}
                          placeholder="Descreva características importantes entre os criadores de conteúdo ativos nessa campanha"
                          value={formValue("characteristics")}
                          onChange={(e) =>
                            changeForm(e.target.value, "characteristics")
                          }
                        />
                        <Input
                          label={"Tema central *"}
                          placeholder="Descreva qual o tema central da sua campanha"
                          value={formValue("campaingTheme")}
                          onChange={(e) =>
                            changeForm(e.target.value, "campaingTheme")
                          }
                        />

                        <Input
                          type={"textarea"}
                          label={"Mensagem principal *"}
                          placeholder="Descreva a principal mensagem da sua campanha"
                          value={formValue("principalMessage")}
                          onChange={(e) =>
                            changeForm(e.target.value, "principalMessage")
                          }
                        />
                        <Input
                          type={"textarea"}
                          label={"Indicadores de sucesso *"}
                          placeholder="Descreva os principais indicadores para medir o sucesso da campanha"
                          value={formValue("successIndicator")}
                          onChange={(e) =>
                            changeForm(e.target.value, "successIndicator")
                          }
                        />

                        <UploadLabel>
                          Existe alguma restrição legal/ regulatória sobre essa
                          campanha *
                        </UploadLabel>
                        <Radio
                          label="Sim"
                          checked={formValue("restritions") === "yes"}
                          onChange={() => changeForm("yes", "restritions")}
                        />
                        <Radio
                          label="Não"
                          checked={formValue("restritions") === "no"}
                          onChange={() => changeForm("no", "restritions")}
                        />

                        {formValue("restritions") === "yes" ? (
                          <Input
                            type={"textarea"}
                            label={" "}
                            placeholder="Descreva quais são as restrições"
                            value={formValue("restritions_description")}
                            onChange={(e) =>
                              changeForm(
                                e.target.value,
                                "restritions_description"
                              )
                            }
                          />
                        ) : null}
                        <Input
                          type={"textarea"}
                          label={"Do's *"}
                          placeholder="Descreva o que é permitido"
                          value={formValue("allowed")}
                          onChange={(e) =>
                            changeForm(e.target.value, "allowed")
                          }
                        />
                        <Input
                          type={"textarea"}
                          label={"Dont's *"}
                          placeholder="Descreva o que não é permitido"
                          value={formValue("notalloed")}
                          onChange={(e) =>
                            changeForm(e.target.value, "notalloed")
                          }
                        />
                      </>
                    ) : null}

                    {type === "video-commerce" ? (
                      <>
                        <Input
                          type={"textarea"}
                          label={"Características dos criadores *"}
                          placeholder="Descreva características importantes entre os criadores de conteúdo ativos nessa campanha"
                          value={formValue("characteristics")}
                          onChange={(e) =>
                            changeForm(e.target.value, "characteristics")
                          }
                        />
                        <Input
                          type={"textarea"}
                          label={
                            "Especificidades do(s) produto(s) que devem estar no video *"
                          }
                          placeholder="Descreva quais são essas especificidades (Ex: Tipo de produto, medida, para qual a finalidade)"
                          value={formValue("videoSpecs")}
                          onChange={(e) =>
                            changeForm(e.target.value, "videoSpecs")
                          }
                        />
                        <Input
                          type={"textarea"}
                          label={"Dont's *"}
                          placeholder="Informe como o produto NÃO deve ser utilizado (Ex: Situações de uso ao qual o produto não é indicado para)"
                          value={formValue("notalloed")}
                          onChange={(e) =>
                            changeForm(e.target.value, "notalloed")
                          }
                        />

                        <UploadLabel>Tom de voz do video *</UploadLabel>
                        <Radio
                          label="Divertido e criativo"
                          checked={formValue("tom") === "creative"}
                          onChange={() => changeForm("creative", "tom")}
                        />
                        <Radio
                          label="Informativo"
                          checked={formValue("tom") === "info"}
                          onChange={() => changeForm("info", "tom")}
                        />
                        <Radio
                          label="Técnico"
                          checked={formValue("tom") === "tech"}
                          onChange={() => changeForm("tech", "tom")}
                        />

                        <UploadLabel>Logística *</UploadLabel>
                        <Radio
                          label="Envio individual para creator"
                          checked={formValue("logistic") === "individual"}
                          onChange={() => changeForm("individual", "logistic")}
                        />
                        <Radio
                          label="Envio em lote para a Nice House distribuir entre os criadores"
                          checked={formValue("logistic") === "lote"}
                          onChange={() => changeForm("lote", "logistic")}
                        />
                        <Radio
                          label="Gravação presencial em Loja/Showroom"
                          checked={formValue("logistic") === "presential"}
                          onChange={() => changeForm("presential", "logistic")}
                        />

                        <CardUpload
                          title={"Produtos que vão ser vinculados aos vídeos *"}
                        >
                          <UploadContentIcon />
                          <UploadContentText>
                            Arraste ou clique para adicionar o arquivo{" "}
                            <b>CSV</b> com os produtos que você deseja vincular
                            a esta campanha.
                          </UploadContentText>
                        </CardUpload>

                        <CardAssets removable />

                        <CheckText flat>
                          Faça o{" "}
                          <CheckText link>download da planilha</CheckText>{" "}
                          padrão para incluir seus produtos no briefing
                        </CheckText>

                        <Input
                          type={"textarea"}
                          label={"Observações *"}
                          placeholder="Descreva alguma observação importante para a criação dos vídeos"
                          value={formValue("videoObs")}
                          onChange={(e) =>
                            changeForm(e.target.value, "videoObs")
                          }
                        />
                      </>
                    ) : null}
                  </PanelForm>
                </>
              )}

              {!(parseInt(step) === 2) ? null : (
                <>
                  <PanelForm>
                    {moods?.map((item, key) => (
                      <CardContentType
                        key={key}
                        item={item}
                        formValue={formValue}
                        changeForm={changeForm}
                      />
                    ))}
                  </PanelForm>
                </>
              )}

              {!(parseInt(step) === 3) ? null : (
                <>
                  <PanelForm>
                    <Input
                      label={"Site de empresa / Landing page *"}
                      placeholder="Digite a URL (Ex: http://www.site.com.br)"
                      value={formValue("company_site")}
                      onChange={(e) =>
                        changeForm(e.target.value, "company_site")
                      }
                    />
                    <Input
                      type={"textarea"}
                      label={"Call-to-action (CTA)"}
                      placeholder="Qual ação você quer que seu público execute após assistir o seu vídeo? ( Ex: Clique aqui, Saiba mais, Baixe agora e etc...)"
                      value={formValue("cta")}
                      onChange={(e) => changeForm(e.target.value, "cta")}
                    />
                    <Input
                      type={"textarea"}
                      label={"Requerimento Especial  *"}
                      placeholder="Informe qualquer requerimento específico incluindo ideias, conceitos, elementos visuais e etc..."
                      value={formValue("special")}
                      onChange={(e) => changeForm(e.target.value, "special")}
                    />

                    <CardUpload title={"Assets"} />
                    <CardAssets removable />
                    <CardTerms formValue={formValue} changeForm={changeForm} />
                  </PanelForm>
                </>
              )}

              {!(parseInt(step || 0) <= 3) ? null : (
                <>
                  <CampaingStepper steps={steps} step={step} />
                </>
              )}
            </BodyPanel>
          </>
        )}
      </ContainerAuthenticated>
    </>
  );
}
