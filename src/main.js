import { Module } from 'maf.js';
import App from './App';

const module = new Module({
    component: App
});

module.mount('#app', true);
