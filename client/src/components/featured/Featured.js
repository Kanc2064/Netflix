import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">comedy</option>
                        <option value="crime">crime</option>
                        <option value="fantasy">fantasy</option>
                        <option value="historical">historical</option>
                        <option value="horror">horror</option>
                        <option value="romance">romance</option>
                        <option value="sci-fi">sci-fi</option>
                        <option value="thriller">thriller</option>
                        <option value="western">western</option>
                        <option value="animation">animation</option>
                        <option value="drama">drama</option>
                        <option value="documentary">documentary</option>
                    </select>
                </div>
            )}
            <img
                width="100%"
                src="https://ychef.files.bbci.co.uk/1600x900/p01m6jty.webp"
                alt=""
            />
            <div className="info">
                <img
                    src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/06/the-hunger-games-makers-reveal-prequel-teaser-and-release-date-001.jpg"
                    alt=""
                />
                <span className="desc">
                    You’re Invited To Return To The Games
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
