using System;

namespace ProductsApi
{
    public class Product
    {
        public int ProductId { get; set; }
		public string ProductName { get; set; }
		public int InventoryQuantity { get; set; }
		public bool ShipOnWeekends { get; set; }
		public int MaxBusinessDaysToShip { get; set; }

        public DateTime EstimatedDeliveryDate { get; set; }
    }
}
