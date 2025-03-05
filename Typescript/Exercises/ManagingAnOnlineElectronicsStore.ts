/**
 * ✅ 1. Filter only devices that are in stock.
 * 💰 2. Create a new array with discounts for available devices.
 * 💲 3. Find the total value of all available devices.
 * 🖥️ 4. Check if all available devices are from the 'Computers' category.
 * 🎧 5. Check if there is at least one device from the 'Accessories' category.
 * 💎 6. Find the first device with a price above 1000.
 * 📱 7. Find the index of the first device from the 'Phones' category.
 * ➕ 8. Add a new device to the array.
 * ➖ 9. Remove the last device from the array.
 * 🔪 10. Extract a subarray with the first 3 devices.
 * ❓ 11. Call the function for each element of the array.
 */

interface IDevices {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  discountPrice?: number;
}

class ManagingAnOnlineElectronicsStore {
  private devices: IDevices[];
  constructor(devices: IDevices[]) {
    this.devices = [...devices];
  }

  getAvailableDevices(): IDevices[] {
    return this.devices.filter((device) => device.inStock === true);
  }

  createNewArrayWithDiscountPrice(discount: number): IDevices[] {
    return this.getAvailableDevices().map((data) => ({
      ...data,
      discountPrice: data.price - data.price * discount,
    }));
  }

  findSumAllAvailableDevices(): number {
    return this.getAvailableDevices().reduce((acc, p) => acc + p.price, 0);
  }

  checkingEveryDevicesCategory(currentCategory: string): boolean {
    return this.getAvailableDevices().every(
      (el) => el.category === currentCategory
    );
  }

  checkingSomeDeviceCategory(currentCategory: string): boolean {
    return this.getAvailableDevices().some(
      (el) => el.category === currentCategory
    );
  }

  findFirstDevice(currentPrice: number): IDevices | undefined {
    return this.devices.find((device) => device.price > currentPrice);
  }

  findIndexFirstDevice(currentCategory: string): number {
    return this.devices.findIndex(
      (device) => device.category === currentCategory
    );
  }

  addNewDeviceToArray(newDevice: IDevices): void {
    this.devices.push(newDevice);
  }

  removeLastDeviceFromArray(): IDevices | undefined {
    return this.devices.pop();
  }

  spliceSubArrayDevices(n: number): IDevices[] {
    return this.devices.slice(0, n);
  }

  processDevices(): {
    availableDevices: IDevices[];
    discountDevices: IDevices[];
    sumAvailableDevices: number;
    isAllDevicesCategory: boolean;
    isSomeDeviceCategory: boolean;
    firstDevice: IDevices | undefined;
    indexFirstDevice: number;
    removedDevice: IDevices | undefined;
    subArrayDevices: IDevices[];
  } {
    return {
      availableDevices: this.getAvailableDevices(),
      discountDevices: this.createNewArrayWithDiscountPrice(0.1),
      sumAvailableDevices: this.findSumAllAvailableDevices(),
      isAllDevicesCategory: this.checkingEveryDevicesCategory("Computers"),
      isSomeDeviceCategory: this.checkingSomeDeviceCategory("Accessories"),
      firstDevice: this.findFirstDevice(1000),
      indexFirstDevice: this.findIndexFirstDevice("Phones"),
      removedDevice: this.removeLastDeviceFromArray(),
      subArrayDevices: this.spliceSubArrayDevices(3),
    };
  }

  getAllDevices(): IDevices[] {
    return [...this.devices];
  }
}

function main() {
  const initialDevices: IDevices[] = [
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      category: "Computers",
      inStock: true,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 800,
      category: "Phones",
      inStock: false,
    },
    { id: 3, name: "Tablet", price: 500, category: "Computers", inStock: true },
    {
      id: 4,
      name: "Headphones",
      price: 150,
      category: "Accessories",
      inStock: true,
    },
    {
      id: 5,
      name: "Smartwatch",
      price: 250,
      category: "Accessories",
      inStock: false,
    },
    {
      id: 6,
      name: "Smartphone",
      price: 800,
      category: "Phones",
      inStock: true,
    },
  ];

  const managingAnOnlineElectronicsStore = new ManagingAnOnlineElectronicsStore(
    initialDevices
  );

  console.log(managingAnOnlineElectronicsStore.processDevices());

  managingAnOnlineElectronicsStore.addNewDeviceToArray({
    id: 7,
    name: "Smartwatch",
    price: 250,
    category: "Accessories",
    inStock: true,
  });

}
main();
