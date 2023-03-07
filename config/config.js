import { defineConfig, utils } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  model: {},
  antd: {},
  request: {},
  initialState: {},
  mock: {
    include: ['src/pages/**/_mock.ts'],
  },
  dva: {},
  // layout: {
  //   // https://umijs.org/docs/max/layout-menu#构建时配置
  //   title: 'UmiJS',
  //   locale: false,
  // },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  define: {
    PROJECT_KEY: defaultSettings.projectKey,
  },
  routes,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  base:'./',
  publicPath:'./'
  // headScripts: [`https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js`, 'https://webapi.amap.com/maps?v=1.4.15&key=0380bbef978f6153d7319110d9b21a72'],
  // links: [{ href: 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css', rel: 'stylesheet' }],
});