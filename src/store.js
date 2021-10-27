import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from "@/services/ApiService";
import { ShoppingCart } from "@/models/ShoppingCart";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        selectedCategoryName: "",
        selectedCategoryBooks: [],
        cart: new ShoppingCart(),
    },
    mutations: {
        SET_CATEGORIES(state, newCategories) {
            state.categories = newCategories;
        },
        SELECT_CATEGORY(state, categoryName) {
            state.selectedCategoryName = categoryName;
        },
        SET_SELECTED_CATEGORY_BOOKS(state, categoryBooks) {
            state.selectedCategoryBooks = categoryBooks;
        },
        ADD_TO_CART(state, book) {
            state.cart.addItem(book, 1);

        },

    },
    actions: {
        fetchCategories: context => {
            ApiService.fetchCategories()
                .then(json => context.commit("SET_CATEGORIES", json))
                .catch(reason => console.log("Error: " + reason));
        },
        selectCategory(context, categoryName) {
            context.commit("SELECT_CATEGORY", categoryName);
        },
        fetchSelectedCategoryBooks: context => {
            ApiService.fetchSelectedCategoryBooks(context.state.selectedCategoryName)
                .then(json => context.commit("SET_SELECTED_CATEGORY_BOOKS", json))
                .catch(reason => console.log("Error: " + reason));
        },
        addToCart(context, book) {
            context.commit("ADD_TO_CART", book);
        },
    },


});