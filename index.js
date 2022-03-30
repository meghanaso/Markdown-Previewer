const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![JS Logo w/ Text](https://webmention.io/avatar/pbs.twimg.com/a2999307c2290e77246d3a0c9a82ac1306f6a21a33b51ed6f96c54f4e6689e57.jpg)
`;

const editorText = document.getElementById("editor");
const previewerText = document.getElementById("preview");

editorText.value = placeholder;
previewerText.value = editorText.value;

editorText.addEventListener("input", function () {
  let editor = editorText.value;
  let previewer = marked.parse(editor);
  previewerText.innerHTML = previewer;
});
marked.setOptions({
  breaks: true
});
