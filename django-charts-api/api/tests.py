from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class ApiTests(APITestCase):
    def test_candlestick_data(self):
        url = reverse('candlestick-data')
        response = self.client.get(url)
        expected_data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            ]
        }
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), expected_data)

    def test_line_chart_data(self):
        url = reverse('line-chart-data')
        response = self.client.get(url)
        expected_data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), expected_data)

    def test_bar_chart_data(self):
        url = reverse('bar-chart-data')
        response = self.client.get(url)
        expected_data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), expected_data)

    def test_pie_chart_data(self):
        url = reverse('pie-chart-data')
        response = self.client.get(url)
        expected_data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), expected_data)

    def test_pizza_pie_chart_data(self):
        url = reverse('pizza_pie-chart-data')
        response = self.client.get(url)
        expected_data = {
            "labels": ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra Cheese", "Other"],
            "data": [30, 25, 15, 10, 8, 7, 5],
            "colors": [
                "rgb(255, 99, 71, 0.2)",
                "rgb(139, 69, 19, 0.2)",
                "rgb(255, 215, 0, 0.2)",
                "rgb(199, 21, 133, 0.2)",
                "rgb(255, 69, 0, 0.2)",
                "rgb(245, 222, 179, 0.2)",
                "rgb(169, 169, 169, 0.2)"
            ]
        }
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), expected_data)