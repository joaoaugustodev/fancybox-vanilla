const FancyBox = function(target) {
	if(!(this instanceof FancyBox)) return new FancyBox(target)

	this.target = document.querySelector(target)
	this.images = this.target.querySelectorAll('img')
	this.$image = new Image()
	this.desc   = document.createElement('div')


	this.src 	= []
	this.alt 	= []

	this.count  = 0

	this.scaleImage()

}

FancyBox.prototype.getSrcImages = function() {
	const _context = this

	for (let i = 0; i < this.images.length; i++) {
		_context.src.push(_context.images[i].src)
	}

	return this.src
}


FancyBox.prototype.getAltImages = function() {
	const _context = this

	for (let i = 0; i < this.images.length; i++) {
		_context.alt.push(_context.images[i].alt)
	}

	return this.alt
}

FancyBox.prototype.hideAndShow = function() {
	const _context = this

	this.$image.style.opacity = 0

	setTimeout(function() {

		_context.$image.style.opacity = 1
		_context.$image.src = _context.getSrcImages()[_context.count]

	}, 1000)
}

FancyBox.prototype.next = function() {
	this.count++

	this.desc.innerHTML = '<p>'+ this.getAltImages()[this.count] +'</p><br>'
	this.hideAndShow()

}

FancyBox.prototype.back = function() {

	const _len = this.images.length - 1

	this.count--

	if (this.count < 0) this.count = _len	
	this.desc.innerHTML = '<p>'+ this.getAltImages()[this.count] +'</p><br>'

	this.hideAndShow()
}


FancyBox.prototype.showImage = function() {

	const _context = this
	const _elem    = document.createElement('div')
	const _back    = document.createElement('button')
	const _next    = document.createElement('button')
	const _close   = document.createElement('button')

	_elem.setAttribute('role', 'dialog')

	_next.innerHTML  = '>'
	_back.innerHTML  = '<'
	_close.innerHTML = '&times;'

	_close.title = 'Fechar'
	_back.title  = 'Voltar'
	_next.title  = 'Próximo'


	_elem.className  = 'fancy'
	_back.className  = 'left'
	_next.className  = 'right'
	_close.className = 'close'


	this.desc.className  = 'desc'

	_next.addEventListener('click', function() {
		_context.next()
	})


	_back.addEventListener('click', function() {
		_context.back()
	})


	Array.prototype.forEach.call(this.images, function(items) {

		items.style.cursor = 'pointer'
		items.setAttribute('count', _context.count++)

		items.addEventListener('click', function(event) {

			_context.$image.src = this.src
			_context.$image.alt = this.alt

			_context.desc.innerHTML = '<p>'+ _context.$image.alt +'</p><br>'
			_close.setAttribute('onclick', 'this.parentNode.remove()')


			_elem.appendChild(_context.$image)
			_elem.appendChild(_back)
			_elem.appendChild(_next)
			_elem.appendChild(_context.desc)
			_elem.appendChild(_close)


			document.body.appendChild(_elem)

			_context.count = parseInt(this.getAttribute('count'))
			
		})

	})
}

FancyBox.prototype.scaleImage = function() {

	this.$image.addEventListener('click', function () {
		this.classList.toggle('zoom')
	})

}
