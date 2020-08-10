import {AppAction} from "./app.actions";


interface HighlighterState {
    status: 'none' | 'success' | 'warning' | 'error'
}


export function highlighter(
    state: HighlighterState = {status: 'none'},
    action: AppAction
) {
    switch (action.type) {
        case 'HIGHLIGHT_SUCCESS':
            state.status = 'success';
            return state;

        case 'HIGHLIGHT_WARNING':
            state.status = 'warning';
            return state;

        case 'HIGHLIGHT_ERROR':
            state.status = 'error';
            return state;

        case 'HIGHLIGHT_NONE':
            state.status = 'none';
            return state;

        default:
            return state
    }
}