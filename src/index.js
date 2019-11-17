import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/heading/header.js'

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton('hello-world-text');
helloWorldButton.render();