function range(start, end, step=1, inf=false) {
    if(!inf && end === Infinity) {
        throw new RangeError('infinity end range');
    }
    
    if(start === Infinity) {
        throw new RangeError('infinity start range');
    }

    return {
        [Symbol.iterator]() {
            return this;
        },
    
        next() {
            if(this.current === undefined) {
                this.current = start;
            }
            this.current += step;
            if(this.current <= end) {
                return {
                    done: false,
                    value: this.current
                };
            }else {
                delete this.current;
                return {
                    done: true
                };
            }
        }
    }
}

for(let val of range(0, Infinity, 11, true)) {
    console.log(val);
}

console.log(...range(0, 100, 11));