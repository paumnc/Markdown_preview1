const initialState = `
This is a paragraph
# heading 1
## heading 2
### heading 3

- lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. item A
1. item B
1. item C

[My Website](https://codepen.io/pau-monce/pen/RwLjmRj)

This is a inline \`<div></div>\`

\`\`\`
// this is multi-line code:

function Preview(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Make your text **bold** _italic_ ~strikethrough~ or **_Both_**

> Block Quotes!
> Comments
> Sentences
> Codes

First Column | Second Column | Third Column
------------ | ------------- | -------------
Werr6tyfu efwq |fewqfqw, gfnueqh | ejwioqf fniuoqhf....
hfuioewqyf dcfewqkio. | Ofheiowqh. | fbueiw fhceuw hufew.

![Miming](https://cdn-icons-png.flaticon.com/512/763/763755.png)


`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render (){
    const {text} = this.state;
    const markdown = marked(text, {breaks: true});
    return (
      <div> 
        <h1 id="heading1" className="text-center me-4"> Markdown Previewer</h1>
        <div id="markdown-content" className="row">
          <div>
            <h3 id="heading3" className="text-center"> Editor </h3>
           <textarea className="form-control" id="editor" value={text} onChange={this.handleChange} />
          </div>
          
            <div>
                <h3 id="heading3" className="text-center"> Preview </h3>
              <div className="preview" dangerouslySetInnerHTML={{__html: markdown}} id="preview"/></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));