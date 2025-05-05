<template>
	<div class="container mx-auto p-4 max-w-xl">
		<h1 class="text-2xl font-bold mb-4">📝 Список дел</h1>
		<!-- Форма добавления -->
		<div class="flex gap-2 mb-4">
			<input
					v-model="todoStore.newTodoText"
					type="text"
					placeholder="Введите задачу"
					class="border p-2 flex-1"
			/>
			<UButton
					@click="todoStore.addTodo"
					color="primary">Добавить</UButton>
		</div>

		<!-- Список задач -->

		<ul class="space-y-2">
			<li
					v-for="todo in todoStore.todos"
					:key="todo.id"
					class="p-2 border rounded">
				<input v-model="todo.completed"
							 type="checkbox"
							 class="mr-2" />
				<span :class="{ 'line-through text-gray-400': todo.completed }">
  				{{ todo.text }}
				</span>
				<UButton
						@click="todoStore.removeTodo(todo.id)"
						color="info"
						size="xs"
						variant="soft">
					Удалить
				</UButton>
			</li>
		</ul>


	</div>
</template>

<script setup lang="ts">
// store
import { useTodoStore } from '~/stores/todo'

const todoStore = useTodoStore()
</script>