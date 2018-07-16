import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carb: -1,
    prot: -1,
    fat: -1,
    templates: [],
  },
  getters: {
    macros: state => ({
      carb: state.carb,
      prot: state.prot,
      fat:  state.fat,
    }),
    templates: state => state.templates,
  },
  mutations: {
    GETMACROSFROMINDEXEDDB(state) {
      let idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      let open = idb.open("ds-macro-idb", 1);
      open.onupgradeneeded = function() {
        let db = open.result;
        let store1 = db.createObjectStore("macros", {keyPath: "id"});
        let store2 = db.createObjectStore("templates",{keyPath: "id"});
        console.log('[IDB] Indexed DB upgraded!');
      };
      open.onsuccess = function() {
        let db = open.result;
        let tx = db.transaction('macros', 'readwrite');
        let store = tx.objectStore('macros');
        let getMacros = store.get(0);
        getMacros.onsuccess = function() {
          if(!getMacros.result) {
            let addInitialMacros = store.add({id:0,carb:0,fat:0,prot:0});
            addInitialMacros.onsuccess = function () {
              state.carb = 0;
              state.prot = 0;
              state.fat = 0;
              console.log('[IDB] Macros created!');
            }
          }
          else {
            state.carb = getMacros.result.carb;
            state.prot = getMacros.result.prot;
            state.fat = getMacros.result.fat;
            console.log('[IDB] Macros loaded!');
          }
        };
        tx.oncomplete = function() {
          db.close();
        };
      };
    },
    ADDMACROS(state, payload) {
      let idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      let open = idb.open("ds-macro-idb", 1);
      open.onupgradeneeded = function() {
        let db = open.result;
        let store1 = db.createObjectStore("macros", {keyPath: "id"});
        let store2 = db.createObjectStore("templates",{keyPath: "id"});
        console.log('[IDB] Indexed DB upgraded!');
      };
      open.onsuccess = function() {
        let db = open.result;
        let tx = db.transaction('macros', 'readwrite');
        let store = tx.objectStore('macros');
        let getMacros = store.get(0);
        getMacros.onsuccess = function() {
          let newMacros = getMacros.result;
          newMacros.carb = parseFloat(newMacros.carb) + parseFloat(payload.carb);
          newMacros.prot = parseFloat(newMacros.prot) + parseFloat(payload.prot);
          newMacros.fat = parseFloat(newMacros.fat) + parseFloat(payload.fat);
          newMacros.carb = newMacros.carb.toFixed(2);
          newMacros.prot = newMacros.prot.toFixed(2);
          newMacros.fat = newMacros.fat.toFixed(2);
          let updateMacros = store.put(newMacros);
          updateMacros.onsuccess = function () {
            state.carb = newMacros.carb;
            state.prot = newMacros.prot;
            state.fat = newMacros.fat;
            console.log('[IDB] Macros updated!');
          }
        };
        tx.oncomplete = function() {
          db.close();
        };
      };
    },
    ERASEMACROS(state) {
      let idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      let open = idb.open("ds-macro-idb", 1);
      open.onupgradeneeded = function() {
        let db = open.result;
        let store1 = db.createObjectStore("macros", {keyPath: "id"});
        let store2 = db.createObjectStore("templates",{keyPath: "id"});
        console.log('[IDB] Indexed DB upgraded!');
      };
      open.onsuccess = function() {
        let db = open.result;
        let tx = db.transaction('macros', 'readwrite');
        let store = tx.objectStore('macros');
        let getMacros = store.get(0);
        getMacros.onsuccess = function() {
          let newMacros = getMacros.result;
          newMacros.carb = 0;
          newMacros.prot = 0;
          newMacros.fat = 0;
          let updateMacros = store.put(newMacros);
          updateMacros.onsuccess = function () {
            state.carb = newMacros.carb;
            state.prot = newMacros.prot;
            state.fat = newMacros.fat;
            console.log('[IDB] Macros erased!');
          }
        };
        tx.oncomplete = function() {
          db.close();
        };
      };
    },
    GETTEMPLATESFROMINDEXEDDB(state) {
      let idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      let open = idb.open("ds-macro-idb", 1);
      open.onupgradeneeded = function() {
        let db = open.result;
        let store1 = db.createObjectStore("macros", {keyPath: "id"});
        let store2 = db.createObjectStore("templates",{keyPath: "id"});
        console.log('[IDB] Indexed DB upgraded!');
      };
      open.onsuccess = function() {
        let db = open.result;
        let tx = db.transaction('templates', 'readwrite');
        let store = tx.objectStore('templates');
        let getTemplates = store.getAll();
        getTemplates.onsuccess = function() {
          state.templates = getTemplates.result;
          console.log('[IDB] Templates loaded!');
        };
        tx.oncomplete = function() {
          db.close();
        };
      };
    },
    ADDTEMPLATE(state,payload) {
      let idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      let open = idb.open("ds-macro-idb", 1);
      open.onupgradeneeded = function() {
        let db = open.result;
        let store1 = db.createObjectStore("macros", {keyPath: "id"});
        let store2 = db.createObjectStore("templates",{keyPath: "id"});
        console.log('[IDB] Indexed DB upgraded!');
      };
      open.onsuccess = function() {
        let db = open.result;
        let tx = db.transaction('templates', 'readwrite');
        let store = tx.objectStore('templates');
        let getTemplate = store.get(payload.id);
        getTemplate.onsuccess = function() {
          if(!getTemplate.result) {
            let addTemplate = store.add({
              id: payload.id,
              name: payload.name,
              carb: parseFloat(payload.carb).toFixed(2),
              prot: parseFloat(payload.prot).toFixed(2),
              fat: parseFloat(payload.fat).toFixed(2),
            });
            addTemplate.onsuccess = function () {
              state.templates.push(payload);
              console.log('[IDB] Template created!');
            }
          }
          else {
            alert('Template already exists!');
          }
        };
        tx.oncomplete = function() {
          db.close();
        };
      };
    },
  },
  actions: {
    addMacros: ({ commit }, payload) => commit('ADDMACROS', payload),
    eraseMacros: ({ commit }) => commit('ERASEMACROS'),
    getMacrosFromIndexedDB: ({ commit }) => commit('GETMACROSFROMINDEXEDDB'),
    getTemplatesFromIndexedDB: ({ commit }) => commit('GETTEMPLATESFROMINDEXEDDB'),
    addTemplate: ({commit}, payload) => commit('ADDTEMPLATE',payload),
  },
})