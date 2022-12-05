Clon of the landing page of tesla.com
const [width, setWidth] = useState()
const [height, setHeight] = useState()
const [left, setLeft] = useState()

const elem = document.querySelector("list-item")

const data = elem.getBoundingClientRect()
console.log(data)
setLeft(data.left)
setHeight(data.height)
setWidth(data.width)

<div
          className='hover-nav'
          style={{ height: height, width: width, left: left }}
        ></div>
