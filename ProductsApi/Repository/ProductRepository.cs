using System;
using System.Collections.Generic;
using System.IO;

namespace ProductsApi
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();
    }

    public class ProductRepository : IProductRepository
    {
        public  IEnumerable<Product> GetProducts()
        {
            var productList = new List<Product>();

            productList.Add(new Product
            {
                ProductId = 1,
		        ProductName = "fugiat exercitation adipisicing",
		        InventoryQuantity = 43,
		        ShipOnWeekends = true,
		        MaxBusinessDaysToShip = 13,
                EstimatedDeliveryDate = DateTime.Today
            });

            productList.Add(new Product
            {
                ProductId = 2,
		        ProductName = "mollit cupidatat Lorem",
		        InventoryQuantity = 70,
		        ShipOnWeekends = true,
		        MaxBusinessDaysToShip = 18
            });

            productList.Add(new Product
            {
                ProductId = 3,
		        ProductName = "non quis sint",
		        InventoryQuantity = 33,
		        ShipOnWeekends = false,
		        MaxBusinessDaysToShip = 15
            });

            productList.Add(new Product
            {
                ProductId = 4,
		        ProductName = "voluptate cupidatat non",
		        InventoryQuantity = 52,
		        ShipOnWeekends = false,
		        MaxBusinessDaysToShip = 18
            });

            productList.Add(new Product
            {
                ProductId = 5,
		        ProductName = "anim amet occaecat",
		        InventoryQuantity = 39,
		        ShipOnWeekends = true,
		        MaxBusinessDaysToShip = 19
            });

            productList.Add(new Product
            {
                ProductId = 6,
		        ProductName = "cillum deserunt elit",
		        InventoryQuantity = 47,
		        ShipOnWeekends = false,
		        MaxBusinessDaysToShip = 20
            });
            
            productList.Add(new Product
            {
                ProductId = 7,
		        ProductName = "adipisicing reprehenderit et",
		        InventoryQuantity = 71,
		        ShipOnWeekends = false,
		        MaxBusinessDaysToShip = 15
            });

            productList.Add(new Product
            {
                ProductId = 8,
		        ProductName = "ex mollit laboris",
		        InventoryQuantity = 80,
		        ShipOnWeekends = false,
		        MaxBusinessDaysToShip = 15
            });
            
            return productList;
        }
    }
}