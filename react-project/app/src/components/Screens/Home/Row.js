import React from 'react';
import { isOdd, formatDate } from '../../Utils/Tools';
import ActionButton from './ActionButton';

const Row = props => {
    const { itemData, itemIndex } = props;
    return <div className="itemContainer" style={{ borderTopColor: itemIndex > 0 ? '#f0f2f4' : 'transparent' }}>
        <img src={itemData.links.mission_patch} />
        <div className="itemContent">
            <h5 className="itemTitle">{itemData.rocket.rocket_name} - {itemData.payloads[0].payload_id} {itemData.launch_success ? "" : <span>- <span className="failed">Failed Mission</span></span>}</h5>
            <small className="itemDescription">{"Launched"} <b>{formatDate(itemData.launch_date_local, "DD MMMM YYYY")}</b> at <b>{formatDate(itemData.launch_date_local, "hh:mmA")}</b> from <b>{itemData.launch_site.site_name}</b></small>
            <div className="actionButtonsContainer">
                {itemData.links.reddit_campaign ? <ActionButton title="Reddit Campaign" url={itemData.links.reddit_campaign} /> : <div />}
                {itemData.links.reddit_launch ? <ActionButton title="Reddit Launch" url={itemData.links.reddit_launch} /> : <div />}
                {itemData.links.reddit_recovery ? <ActionButton title="Reddit Recovery" url={itemData.links.reddit_recovery} /> : <div />}
                {itemData.links.reddit_media ? <ActionButton title="Reddit Media" url={itemData.links.reddit_media} /> : <div />}
                {itemData.links.presskit ? <ActionButton title="Press Kit" url={itemData.links.presskit} /> : <div />}
                {itemData.links.article_link ? <ActionButton title="Article" url={itemData.links.article_link} /> : <div />}
                {itemData.links.video_link ? <ActionButton title="Watch Video" url={itemData.links.video_link} /> : <div />}
            </div>
        </div>
        <div className="flightNumber">
            <h4>#{itemData.flight_number}</h4>
            <small>Flight Number</small>
        </div>
    </div>
}

export default Row;