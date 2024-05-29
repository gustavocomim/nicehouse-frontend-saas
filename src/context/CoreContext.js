import React, { useState, createContext, useEffect, useCallback } from 'react'
import { ReadObject, SaveObject } from '../services/storage'
 
export const CoreContext = createContext({})

export const CoreState = ({ children }) => {
      
	const [ modal, setModal ] = useState( null )  
	const [ reloading, setReloading ] = useState( null )  
	const [ user, setUser ] = useState( ReadObject('user') ? ReadObject('user') : [])  
    const [ form, setForm ] = useState( ReadObject('form') ? ReadObject('form') : {})
    const [ assets, setAssets ] = useState( ReadObject('assets') ? ReadObject('assets') : [])


    const addAsset = useCallback(asset => {
		// console.log("New file", asset)
		setAssets([ ...assets, asset ])
		setReloading(true)
	}, [assets])


    const removeAsset = useCallback((id) => {
        setAssets([ ...assets ].filter( f => f.id !== id ))
		setReloading(true)
    }, [assets])

	useEffect(() => {
		if(reloading){
			const timer = setTimeout(() => { setReloading(false) ;}, 100)
			return () => { clearTimeout(timer) ;}
		}
	}, [reloading])

	const contextValue = {  
		user, setUser ,
		form, setForm ,
		modal, setModal,
		assets, setAssets,
		addAsset, removeAsset,
		reloading
	}

	// to persist state when app reload  
    useEffect(() => { SaveObject('user', user) ;}, [user]) 
    useEffect(() => { SaveObject('form', form) ;}, [form]) 
    useEffect(() => { SaveObject('assets', assets) ;}, [assets]) 

	return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}
