import React from 'react';
import Header from './Header';
import TextInput from '../../Widgets/TextInput';
import DropDown from '../../Widgets/DropDown';
import Space from '../../Widgets/Space';
import Row from './Row';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../StoreDefinitions';
import swal from 'sweetalert2';
import { stringIsNullOrEmpty } from '../../Utils/Tools';

class Home extends React.Component {
    keywords = "";
    launchPad = "";
    minYear = "";
    maxYear = "";

    componentWillMount() {
        this.setBackgroundImage();
    }

    componentDidMount() {
        this.props.populateLists();
        this.loadList();
    }

    setBackgroundImage = () => {
        document.getElementById("body").setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url('" + require('../../../static/background.jpeg') + "') no-repeat center center; background-size: cover; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover;");
    }

    loadList = () => {
        this.props.populateData(this.keywords, this.launchPad, this.minYear, this.maxYear);
    }

    scrollResultsToTop = () => {
        $('html, body').animate({ scrollTop: $("#content").offset().top }, 800);
    }

    showInvalidYear = () => {
        swal("Invalid Input", "A [Min Year] value greater than [Max Year] value is not accepted.", 'error');
    }

    render() {
        const { items, launchPads, launchDates } = this.props.data;
        return <div className="mainContainer">
            <Header onDownClick={() => this.scrollResultsToTop()} />
            <div id="content" className="contentContainer">
                <div className="content">
                    <div className="filters d-flex align-content-start flex-wrap">
                        <TextInput id={uuid()} label="Keywords" hint="eg Falcon" style={{ minWidth: 256 }} onChange={(value) => this.keywords = value} />
                        <Space width={24} />
                        <DropDown id={uuid()} label="Launch Pad" options={launchPads} className="filterDropDown" style={{ maxWidth: 320 }} onChange={(value) => this.launchPad = value} />
                        <Space width={24} />
                        <DropDown id={uuid()} label="Min Year" options={launchDates} className="filterDropDown" style={{ minWidth: 160 }} onChange={(value) => this.minYear = value} />
                        <Space width={24} />
                        <DropDown id={uuid()} label="Max Year" options={launchDates} className="filterDropDown" style={{ minWidth: 160 }} onChange={(value) => this.maxYear = value} />
                        <Space width={24} />
                        <button className="btn btn-success applyButton" onClick={() => {
                            if (!stringIsNullOrEmpty(this.minYear) && !stringIsNullOrEmpty(this,this.maxYear) && parseInt(this.minYear) > parseInt(this.maxYear)) {
                                this.showInvalidYear();
                            } else {
                                this.loadList()
                            }
                        }} >Apply</button>
                    </div>
                    <div className="contentItems">
                        {items.map((el, index) => {
                            return <Row key={uuid()} itemData={el} itemIndex={index} />
                        })}
                    </div>
                </div>
                <footer className="footer">
                    <p>Copyright © 2018 Space Savvy</p>
                    <a href="javascript:void(0);" onClick={() => this.scrollResultsToTop()} >Back to top</a>
                </footer>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);