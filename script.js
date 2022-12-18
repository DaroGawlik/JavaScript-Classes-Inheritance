class Base {
	constructor(init) {
		if (typeof init === 'number') {
			this.value = init || 0
		} else {
			this.value = init || ''
		}
	}
	plus() {
		this.value = [...arguments].reduce((acc, curr) => acc + curr, this.value)
		return this
	}

	minus(n) {
		if (typeof this.value === 'number') {
			this.value = [...arguments].reduce((acc, curr) => acc - curr, this.value)
			return this
		} else {
			this.value = this.value.substring(0, this.value.length - n)
			return this
		}
	}

	multiply(n) {
		if (typeof this.value === 'number') {
			this.value *= n
			return this
		} else {
			this.value = this.value.repeat(n)
			return this
		}
	}

	divide(n) {
		if (typeof this.value === 'number') {
			this.value /= n
			return this
		} else {
			this.value = this.value.slice(0, Math.floor(this.value.length / n))
			return this
		}
	}

	mod(n) {
		this.value = this.value % n
		return this
	}

	remove(n) {
		this.value = this.value.split(n).join('')
		return this
	}

	sub(n) {
		this.value = this.value.substring(n)
		return this
	}

	get() {
		return this.value
	}

	static random(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}

console.log(Base.random(10, 100))

//ES6 class IntBuilder:
class IntBuilder extends Base {}
let intBuilder = new IntBuilder(10)
const valueNumber = intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get()
console.log(valueNumber)

//ES5 class StringBuilder

function StringBuilder(init) {
	Object.assign(this, new Base(init))
}

StringBuilder.prototype = Object.create(Base.prototype)
const stringBuilder = new StringBuilder('Hello')
const valueString = stringBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(1, 1).get()
console.log(valueString)
