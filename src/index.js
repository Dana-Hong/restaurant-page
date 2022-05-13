import { home } from "./home";
import { navList, footer } from "./data";
import { loadHeader } from "./header";
import { loadFooter } from "./footer";
import './style.css';

loadHeader(navList);
home.initialLoad();
loadFooter(footer);