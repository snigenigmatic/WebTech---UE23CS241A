class ResImage extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.src} alt={this.props.alt} width="250px" height="250px" />
            </div>
        );
    }
}

class ResLink extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.href}>{this.props.text}</a>
            </div>
        );
    }
}

class ResText extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.textarea}</p>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <ResImage src={this.props.src} alt={this.props.alt} />
                <ResLink href={this.props.href} text={this.props.text} />
                <ResText textarea={this.props.textarea} />
            </div>
        );
    }
}

var container = document.querySelector("#container");

// create root
var root = ReactDOM.createRoot(container);

// render
root.render(
    <Content
        src="image.png"
        alt="placeholder"
        href="https://www.google.com"
        text="Click here"
        textarea="This is a paragraph"
    />
);