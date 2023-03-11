import { createContext } from "react";

export type WishListItemType = {
    sku: string,
    name: string,
    price: number
}

type WishListStateType = { wishlist: WishListItemType[] }

const initWishListState: WishListStateType = { wishlist: [] }

const WISHLIST_REDUCER_TYPE = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    MOVE: 'MOVE'
}

export type WishListReducerType = typeof WISHLIST_REDUCER_TYPE

export type ReducerAction = {
    type: string,
    payload?: WishListItemType 
}

const reducer = (state: WishListStateType, action: ReducerAction): WishListStateType => {
    switch (action.type) {
        case WISHLIST_REDUCER_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('Action payload missing when add to wishlist')
            }
            const { sku, name, price } = action.payload

            const filteredWishlist: WishListItemType[] = state.wishlist.filter(item => item.sku !== sku)

            const itemExist: WishListItemType | undefined = state.wishlist.find(item => item.sku === sku)

            return { ...state, wishlist: [...filteredWishlist, { sku, name, price, }]}
        }
    }
}