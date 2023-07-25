from unittest import TestCase, main
from project.student import Student


class TestHero(TestCase):
    def setUp(self):
        self.student = Student("The Rock", {"Python": ["note1"]})

    def test_init_without_courses(self):
        self.student = Student("The Rock")
        self.assertEqual("The Rock", self.student.name)
        self.assertEqual({}, self.student.courses)

    def test_init_with_courses(self):
        self.student = Student("The Rock", {"Python": ["note1"]})
        self.assertEqual("The Rock", self.student.name)
        self.assertEqual({"Python": ["note1"]}, self.student.courses)

    def test_enroll_if_course_in_courses(self):
        res = self.student.enroll("Python", ["note2"])
        self.assertEqual("Course already added. Notes have been updated.", res)
        self.assertEqual(["note1", "note2"], self.student.courses["Python"])

    def test_enroll_new_course_with_notes(self):
        res = self.student.enroll("Java", ["note1"])
        self.assertEqual("Course and course notes have been added.", res)
        self.assertEqual(["note1"], self.student.courses["Java"])

    def test_enroll_new_course_with_adding_notes(self):
        res = self.student.enroll("Java", ["note1", "note2"], "Y")
        self.assertEqual("Course and course notes have been added.", res)
        self.assertEqual(["note1", "note2"], self.student.courses["Java"])

    def test_enroll_new_course_without_adding_notes(self):
        res = self.student.enroll("Java", ["note1"], "N")
        self.assertEqual("Course has been added.", res)
        self.assertEqual([], self.student.courses["Java"])

    def test_enroll_in_existing_course_with_adding_notes(self):
        res = self.student.enroll("Python", ["note2"], "Y")
        self.assertEqual("Course already added. Notes have been updated.", res)
        self.assertEqual(["note1", "note2"], self.student.courses["Python"])

    def test_add_notes(self):
        self.student.courses = {"Java": []}
        res = self.student.add_notes("Java", "note1")
        self.assertEqual("Notes have been updated", res)
        self.assertEqual(["note1"], self.student.courses["Java"])

    def test_add_notes_exception(self):
        with self.assertRaises(Exception) as e:
            self.student.add_notes("Java", "note1")
        self.assertEqual("Cannot add notes. Course not found.", str(e.exception))
        self.assertEqual({"Python": ["note1"]}, self.student.courses)

    def test_leave_course(self):
        res = self.student.leave_course("Python")
        self.assertEqual("Course has been removed", res)
        self.assertEqual({}, self.student.courses)

    def test_leave_course_exception(self):
        with self.assertRaises(Exception) as e:
            self.student.leave_course("Java")
        self.assertEqual("Cannot remove course. Course not found.", str(e.exception))


if __name__ == "__main__":
    main()
