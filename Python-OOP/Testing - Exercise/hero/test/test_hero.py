from unittest import TestCase, main

from project.hero import Hero

class TestHero(TestCase):

    def setUp(self):
        self.hero = Hero('Hero', 1, 100, 100)
        self.enemy = Hero('Enemy', 1, 50, 50)

    def test_correct_initializing(self):
        self.assertEqual('Hero', self.hero.username)
        self.assertEqual(1, self.hero.level)
        self.assertEqual(100, self.hero.health)
        self.assertEqual(100, self.hero.damage)

    def test_battle_when_hero_is_the_same_as_enemy_raises_exception(self):
        with self.assertRaises(Exception) as ex:
            self.hero.battle(self.hero)

        self.assertEqual('You cannot fight yourself', str(ex.exception))

    def test_fight_with_zero_hero_health_raises_value_error(self):
        self.hero.health = 0

        with self.assertRaises(ValueError) as ve:
            self.hero.battle(self.enemy)

        self.assertEqual('Your health is lower than or equal to 0. You need to rest', str(ve.exception))

    def test_fight_with_zero_health_raises_value_error(self):
        self.enemy.health = 0

        with self.assertRaises(ValueError) as ve:
            self.hero.battle(self.enemy)

        self.assertEqual("You cannot fight Enemy. He needs to rest", str(ve.exception))

    def test_health_remove_after_fight_is_draw_expect_correct(self):
        self.hero.health = 50
        result = self.hero.battle(self.enemy)

        self.assertEqual(0, self.hero.health)
        self.assertEqual(-50, self.enemy.health)
        self.assertEqual('Draw', result)

    def test_batle_enemy_and_win_expect_stats_improve(self):
        result = self.hero.battle(self.enemy)

        self.assertEqual(2, self.hero.level)
        self.assertEqual(55, self.hero.health)
        self.assertEqual(105, self.hero.damage)
        self.assertEqual('You win', result)

    def test_batle_enemy_and_lose_expect_stats_improve(self):
        self.hero, self.enemy = self.enemy, self.hero
        result = self.hero.battle(self.enemy)

        self.assertEqual(2, self.enemy.level)
        self.assertEqual(55, self.enemy.health)
        self.assertEqual(105, self.enemy.damage)
        self.assertEqual('You lose', result)


    def test_correct__str__(self):
        self.assertEqual(
            f"Hero Hero: 1 lvl\n" 
            f"Health: 100\n" 
            f"Damage: 100\n",
            str(self.hero)
        )


if __name__ == '__main__':
    main()