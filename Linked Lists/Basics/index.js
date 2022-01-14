class Node {
    constructor (data, next = null) {
        this.data = data,
        this.next = next
    }
}


class LinkedList {
    constructor () {
        this.head = null,
        this.size = 0
    }

    // Insert first node
    insertFirstNode(data) {
        this.head = new Node (data, this.head)
        this.size++
    }


    // Insert last node
    insertLastNode(data) {
        let node = new Node(data)
        let current

        if (!this.head) {
            this.head = node

        } else {
            current = this.head

            while (current.next) {
                current = current.next

            }
    
            current.next = node
        }

        this.size++
    }


    //Insert at index
    insertAt(index, data) {
        if (index > this.size) {
            return 
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        let step = 0
        let current = this.head
        let previous

        while (step < index) {
            previous = current
            current = current.next
            step++
        }

        previous.next = new Node(data, current)
        this.size++
    }


    // Get at index
    getAt(index) {
        if (index === 0)  {
            console.log(this.head)
            return
        }

        if (index > this.size) {
            return
        }

        let step = 0
        let current = this.head

        while (step < index) {
            current = current.next
            step++
        }

        let value = current.data
        console.log(value)
    }


    // Remove at index
    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next
            return
        }

        if (index > this.size) {
            return
        }

        let step = 0
        let current = this.head
        let previous

        while (step < index) {
            previous = current
            current = current.next
            step++
        }

        previous.next = current.next
        this.size--
        
    }


    // Clear list
    clearList() {
        this.head = null
        this.size = 0
    }


    // Print list data
    printList() {
        let current = this.head
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const l1 = new LinkedList()

l1.insertFirstNode(200)
l1.insertFirstNode(100)
// console.log(l1)

// l1.printList()

l1.insertLastNode(300)
// console.log(l1)

// l1.printList()

l1.insertAt(1, 500)



l1.printList()

l1.removeAt(2)
console.log('removed index 2')
l1.printList()

l1.clearList()

console.log('list has been cleared')

console.log(l1)

l1.insertFirstNode(5)
l1.insertFirstNode(15)
l1.insertFirstNode(25)

console.log('list has been repopulated')

console.log(l1)
l1.printList()





