import { navList, footer } from "./data";
import { loadHeader } from "./header";
import { loadFooter } from "./footer";
import { home } from "./home";
import './style.css';
// import { loadFooter } from "./footer";
// import { menu } from "./menu";
// import { about } from "./about";
// import { ramenTypes } from "./data"

loadHeader(navList);
home.initialLoad();
loadFooter(footer);