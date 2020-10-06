import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notes: [
            {
                header: "My first note",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur odio non dolor porta varius. In eget dapibus leo. Proin facilisis porttitor libero, eget bibendum erat porta consequat.`,
                id: "1",
            },
            {
                header: "My second note",
                text: `В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта, вне зависимости от их уровня, должны быть объективно рассмотрены соответствующими инстанциями. Кстати, многие известные личности представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Есть над чем задуматься: некоторые особенности внутренней политики обнародованы.`,
                id: "2",
            },
            {
                header: "New note",
                text: `Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей заблокированы в рамках своих собственных рациональных ограничений. В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности подвергнуты целой серии независимых исследований.`,
                id: "3",
            },
        ],
    },
    getters: {
        allPosts(state) {
            return state.notes;
        },
        getNoteByKey(state) {
            return (id) => state.notes.find(item => item.id === id);
        }
    },
    mutations: {
        addPost(state, note) {
            state.notes.unshift(note);
        },
        updateNote(state, obj) {
           const index = state.notes.findIndex(item => item.id === obj.id);
           Vue.set(state.notes, index, obj);
        }
    }
})