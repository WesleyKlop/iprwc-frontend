export const isChildOf = (parent: HTMLElement, child: HTMLElement): boolean => {
    if (child === document.body || child === null) {
        return false
    }
    if (child === parent) {
        return true
    }
    return isChildOf(parent, child.parentElement)
}
