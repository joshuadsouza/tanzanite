'use strict';

const e = React.createElement;

class EventImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numberImages: Math.min(24, this.props.numberImages)}
    }

    render() {
        
        var directory = this.props.directory;
        
        return e('div', {}, 
            Array.from(Array(this.state.numberImages).keys()).map(function (num) {
                return e('a', {
                    href: `${directory}${num+1}.jpg`,
                    target: "_blank"
                },
                e('img', {
                    src: `${directory}${num+1}_t.jpg`,
                    className: "col-lg-2 col-md-4 col-sm-5 p-1 h-100",
                    style: {"objectFit" : "cover"}
                }));
            }),
            e('button', {onClick: () => {
                this.setState({numberImages: Math.min(this.state.numberImages + 24, this.props.numberImages)});
            }, 
            className: "btn col-12 p-3" + (this.state.numberImages < this.props.numberImages ? "visible" : "invisible")},
            "LOAD MORE IMAGES")
        );
        
    }
}

const domContainer = document.querySelector('#event-images');
ReactDOM.render(e(EventImages, {
    numberImages: 140,
    directory: "img/events/a-childrens-christmas/"
}), domContainer);
