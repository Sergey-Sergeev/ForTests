import { context } from "..Program/data";

const templateSource = await fetch("../Handlebars/template.hbs");
const source = await templateSource.text();

const template = Handlebars.compile(source);

const html = template(context);
document.getElementById("app").innerHTML = html;
