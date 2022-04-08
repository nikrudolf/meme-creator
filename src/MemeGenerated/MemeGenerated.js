import React, { useState } from "react";
import styles from './styles.module.css'
import { useHistory, useLocation } from "react-router-dom"
import { useClipboard } from "use-clipboard-copy"
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, RedditShareButton, RedditIcon } from "react-share";

export const MemeGenerated = () => {

    const [copied, setCopied] = useState(false)

    const clipboard = useClipboard()
    const history = useHistory()
    const location = useLocation()
    const url = new URLSearchParams(location.search).get('url')


    const copyLink = () => {
        clipboard.copy(url)
        setCopied(true)
    }

    return (
        <div className={styles.container}>
            <button onClick={() => history.push('/')} className={styles.home}>
                <b>Erstelle noch ein Meme</b>
            </button>
            {url && <img src={url} alt="Meme" />}
            <button onClick={copyLink} className={styles.copy}>
                <b>{copied ? 'Link kopiert!' : 'Meme Link'}</b>
            </button>

            <div className="center">
                <FacebookShareButton className="styles.share"
                    url={url}
                    quote={"witzig"}>
                    <FacebookIcon round={true}> </FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton className="styles.share"
                    url={url}
                    title={"Das ist super witzig"}>
                    <TwitterIcon round={true}> </TwitterIcon>
                </TwitterShareButton>
                <WhatsappShareButton className="styles.share"
                    url={url}
                    title={"Das ist super witzig"}>
                    <WhatsappIcon round={true}></WhatsappIcon>
                </WhatsappShareButton>
                <RedditShareButton className="styles.share"
                    url={url}
                    title={"Das ist super witzig"}>
                    <RedditIcon round={true}></RedditIcon>
                </RedditShareButton>
            </div>

        </div>

    )
}