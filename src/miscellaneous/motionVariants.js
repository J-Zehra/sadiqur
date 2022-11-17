// ANIMATION VARIANTS
export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

export const container2 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
}

export const item2 = {
    hidden: { opacity: 0, x: -50 },
    show: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: .3
        }
    }
}

export const item3 = {
    hidden: { opacity: 0, x: 50 },
    show: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: .3
        }
    }
}

export const item4 = {
    hidden: { opacity: 0, y: -50 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: .1
        }
    }
}
