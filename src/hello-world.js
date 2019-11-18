import './components/hello-world-button/hello-world-button.scss';
import Heading from './components/heading/header.js';
import _ from 'lodash';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js'


const heading = new Heading();
heading.render(_.upperFirst('hello world'));
function helloworld(){
    console.log('hello world!!');
}
helloworld();
const button = new HelloWorldButton();
button.render();