import { component } from "./component";
import  './styles/style.css';
import logo from './images/nature.jpg';

const img = document.createElement('img');
img.src=logo;
document.body.appendChild(img)

document.body.appendChild(component());