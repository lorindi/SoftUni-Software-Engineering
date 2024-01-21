from rest_framework import serializers

from todos_rest_demo.todos_api.models import Todo, Category


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class TodoCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

    def to_internal_value(self, data):
        instance = super().to_internal_value(data)
        instance['user'] = self.context['request'].user
        return instance


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
