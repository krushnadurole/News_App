import React, { Component } from 'react'
// import PropTypes from 'prop-types'
export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, publishedAt, source } = this.props;
        return (
            <div className="m-3">
                {/* <button type="button" class="btn btn-primary position-relative " >
                    source
                    <span class="position-relative top-20 start-300 translate-middle badge rounded-pill bg-danger" style={{ top: "20px", marginLeft: "4em", display: "inline-block", position: "relative" }} >

                        {source}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button> */}
                <div style={{display:"inline-block",paddingBottom:"5px"}}>
                 <span class="position-relative top-20 start-300 translate-middle badge rounded-pill bg-danger" style={{ top: "20px", marginLeft: "4em",display:"block",position:"relative"}} >

source : {source}
<span class="visually-hidden">unread messages</span>
</span>
                 </div>
                <div className="card" >
                    <img src={imageurl = null ? "https://in.images.search.yahoo.com/images/view;_ylt=AwrwJUUe4pdhIWYAYXy9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzRhZjY1OWU5ODIwMDliMTI5NzQ2NDE5YmM2MjBjM2E1BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcity%2Bimages%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=3840&h=2160&imgurl=www.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2015%2F07%2F869c978552ff253563b883e6f808f066.jpg&rurl=http%3A%2F%2Fwww.hdwallpaper.nu%2Fbeautiful-city-wallpapers%2F&size=1272.1KB&p=city+images&oid=4af659e982009b129746419bc620c3a5&fr2=piv-web&fr=mcafee&tt=Beautiful+City+Wallpapers%2C+Pictures%2C+Images&b=0&ni=21&no=2&ts=&tab=organic&sigr=DUSAxHlTQWd.&sigb=K98WOtiSwu4N&sigi=6mNULH05jjyr&sigt=OmWUz2qiAu1_&.crumb=CKnaSa0NefS&fr=mcafee&fr2=piv-web&type=E211IN826G0" : imageurl} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More. </a>

                        <div class="card-footer">
                            <small class="text-muted"> By {author} updated at : {new Date(publishedAt).toGMTString()} </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem





