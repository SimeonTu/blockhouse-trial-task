from rest_framework.response import Response
from rest_framework.decorators import api_view

# This view returns candlestick data for a financial chart.
# Candlestick data includes the open, high, low, and close values for specific dates.
@api_view(['GET'])
def candlestick_data(request):
    # Sample data for candlestick chart
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
        ]
    }
    # Return the data as a JSON response
    return Response(data)


# This view returns data for a line chart.
# It provides labels for the x-axis and corresponding data points.
@api_view(['GET'])
def line_chart_data(request):
    # Sample data for line chart
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    # Return the data as a JSON response
    return Response(data)


# This view returns data for a bar chart.
# It provides labels for the bars and the values for each bar.
@api_view(['GET'])
def bar_chart_data(request):
    # Sample data for bar chart
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    # Return the data as a JSON response
    return Response(data)


# This view returns data for a pie chart.
# It provides labels for the pie slices and the corresponding values.
@api_view(['GET'])
def pie_chart_data(request):
    # Sample data for pie chart
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    # Return the data as a JSON response
    return Response(data)


# This view returns data for a pizza pie chart, which is a variant of a pie chart.
# It includes labels for different pizza toppings, their quantities, and colors for each segment.
@api_view(['GET'])
def pizza_pie_chart_data(request):
    # Sample data for pizza pie chart
    data = {
        "labels": ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra Cheese", "Other"],
        "data": [30, 25, 15, 10, 8, 7, 5],
        "colors": [
            "rgb(255, 99, 71, 0.2)",    # Color for Pepperoni
            "rgb(139, 69, 19, 0.2)",    # Color for Mushrooms
            "rgb(255, 215, 0, 0.2)",    # Color for Onions
            "rgb(199, 21, 133, 0.2)",   # Color for Sausage
            "rgb(255, 69, 0, 0.2)",     # Color for Bacon
            "rgb(245, 222, 179, 0.2)",  # Color for Extra Cheese
            "rgb(169, 169, 169, 0.2)"   # Color for Other
        ]
    }
    # Return the data as a JSON response
    return Response(data)
