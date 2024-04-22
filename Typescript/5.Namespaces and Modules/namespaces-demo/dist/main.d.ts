declare namespace AnimalGroup {
    interface MammalType {
        legsCount: number;
        animalType: string;
        furColor?: string;
    }
    class Mammal implements MammalType {
        legsCount: number;
        animalType: string;
        furColor: string;
        constructor(type: string, furColor: string);
        getDetail(): string;
    }
}
declare const m2: AnimalGroup.Mammal;
declare namespace People {
    class Person {
        name: string;
        constructor(name: string);
    }
}
declare const p: People.Person;
declare namespace Shop {
    namespace TechShop {
        class Game {
            constructor();
        }
    }
}
declare const game: shop.Game;
import shop = Shop.TechShop;
declare const g2: shop.Game;
//# sourceMappingURL=main.d.ts.map