#include<iostream>
#include<cstdlib>
#include<ctime>
using namespace std;

int partition(int arr[], int left, int right) {
    int randomIndex = left + rand() % (right - left + 1);
    swap(arr[randomIndex], arr[right]);

    int pivot = arr[right];  // Consider the last element as the pivot
    int pIndex = left;  // pIndex represents the index of the pivot in the sorted list

    for (int i = left; i < right; i++) {  // Traverse the array
        if (arr[i] <= pivot) {  // If the current element is smaller than or equal to pivot
            swap(arr[i], arr[pIndex]);  // Swap the element with the element at pIndex
            pIndex++;  // Increment pIndex
        }
    }
    swap(arr[pIndex], arr[right]);  // Place the pivot in its correct position
    return pIndex;  // Return the pivot index
}

void quick_sort(int arr[], int left, int right) {
    if (left < right) {
        int pIndex = partition(arr, left, right);
        quick_sort(arr, left, pIndex - 1);  // Recursively sort the left subarray
        quick_sort(arr, pIndex + 1, right);  // Recursively sort the right subarray
    }
}

// Print the array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    srand(time(0));  // Seed for random number generator

    int arr[] = {16, 55, 12, -23, 94, 11, 45, 2, -64, 7};  // Sample array
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Unsorted array: ";
    printArray(arr, size);

    quick_sort(arr, 0, size - 1);  // Sort the array

    cout << "Sorted array: ";
    printArray(arr, size);

    return 0;
}
