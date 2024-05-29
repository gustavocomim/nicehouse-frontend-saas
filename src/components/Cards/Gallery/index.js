import React, { useContext, useEffect, useRef } from "react";  

import {  

    CardGalleryContent,
    CardGalleryImage,
    CardGalleryBody,
    
    CardGalleryBodyText,
    CardGalleryBodyActions,
    CardGalleryVideo, 

} from "./styled";

import Button from "components/Form/Button";
import { CoreContext } from "context/CoreContext";
import { parseStrapiImage } from "utils";
import CardApproved from "../CardApproved";

export default function CardGallery({ id, status, image, text, url, approved, reload, ...rest }){  

    const { setModal } = useContext(CoreContext)

    const openReview = () => {
        setModal({ type: "review", item:{ id, status, image, text, url, ...rest }, reload })
    }

    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        // Seek to 10 seconds
        videoRef.current.currentTime = 10;
        // Start playback
        videoRef.current.play();
      }
    }, []);

    return ( 
        <>

            <CardGalleryContent>
                {
                    rest?.isVideo ? <>
                        <CardGalleryVideo ref={videoRef} controls={false} autoPlay={false} muted loop>
                            <source src={parseStrapiImage(rest?.parsed_file?.url)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </CardGalleryVideo>
                    </> :
                    <CardGalleryImage image={image} />
                }
                <CardGalleryBody>
                    <CardApproved approved={approved} />
                    <CardGalleryBodyText>
                        { text }
                    </CardGalleryBodyText>
                    <CardGalleryBodyActions>
                        <Button primary outline onClick={ url ? () => window.open(parseStrapiImage(url), "campaing-asset") : null }>DONWLOAD</Button>
                        <Button primary onClick={openReview}>VISUALIZAR</Button>
                    </CardGalleryBodyActions>
                </CardGalleryBody>
            </CardGalleryContent>
                                           
        </>
    );
}