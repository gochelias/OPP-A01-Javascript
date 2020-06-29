class Product 
{
    constructor(name, price, year) 
    {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI 
{
    addProduct(product)
    {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = 
        `
            <div class="card-list">
                <div class="list">
                    <div><strong>Name:  </strong> ${product.name}</div> 
                    <div><strong>Price:  </strong> ${product.price} </div> 
                    <div><strong>Year:  </strong> ${product.year}</div> 
                    <a href="#" class="red center" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }
    resetForm()
    {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element)
    {
        if(element.name === 'delete')
        {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Successfully Removed', 'blue btn-alert center')
        }
    }
    showMessage(message, cssClass)
    {
        const div = document.createElement('div');
        div.className = `alert alert - ${cssClass}`
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function () 
        {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

document.getElementById('product-form').addEventListener('submit', 
function (e) 
{
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();

    if (name === '' || price === '' || year === '') 
    {
        return ui.showMessage('Complete Fields', 'orange btn-alert center');  
    }

    ui.addProduct(product);
    ui.resetForm();     
    ui.showMessage('Successfully Added', 'green btn-alert center');

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function (e) 
{
    const ui = new UI();
    ui.deleteProduct(e.target);
})