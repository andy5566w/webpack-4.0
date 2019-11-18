import Heading from './components/heading/header.js';
import KiwiImage from './components/kiwi-images/kiwi-images.js';
import _ from 'lodash';
const heading = new Heading();
heading.render(_.upperFirst('kiwi'));

const kiwiImage = new KiwiImage();
kiwiImage.render();