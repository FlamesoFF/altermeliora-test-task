export interface AppAction {
    type: string
    text?: string
}

export const HIGHLIGHT_SUCCESS = {
    type: 'HIGHLIGHT_SUCCESS'
};

export const HIGHLIGHT_WARNING = {
    type: 'HIGHLIGHT_WARNING'
};

export const HIGHLIGHT_ERROR = {
    type: 'HIGHLIGHT_ERROR'
};

export const HIGHLIGHT_NONE = {
    type: 'HIGHLIGHT_NONE'
};