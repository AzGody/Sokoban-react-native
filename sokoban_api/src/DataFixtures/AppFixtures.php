<?php

namespace App\DataFixtures;

use App\Entity\Map;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $map = new Map();
        $map->setLevel(1)->setMatrix([
            "#######",
            "#.....#",
            "#.....#",
            "#..X..#",
            "#..C..#",
            "#..P..#",
            "#######"
        ]);
        $manager->persist($map);

        $map2 = new Map();
        $map2->setLevel(2)->setMatrix([
            "#######",
            "#...X.#",
            "#...C.#",
            "#..X..#",
            "#..C..#",
            "#..P..#",
            "#######"
        ]);
        $manager->persist($map2);

        $manager->flush();
    }
}
