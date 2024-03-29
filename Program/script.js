import { context } from "../Program/data.js";

const templateSource = await fetch("../Handlebars/template.hbs");
const source = await templateSource.text();

const template = Handlebars.compile(source);

const html = template(context);
document.getElementById("app").innerHTML = html;