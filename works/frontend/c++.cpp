// Merge-Insertion Sort in C++
//Developed by: <Write your name>
//Date: 
//CSCI 3400

#include <iostream>
using namespace std;

const int THRESHOLD = 10; // Threshold for switching to insertion sort

void insertionSort(int arr[], int left, int right) {
    for (int i = left + 1; i <= right; i++) { // Iterate from the second element to the end
        int key = arr[i]; // Store the current element as key
        int j = i - 1; // Initialize j to the element before i
        while (j >= left && arr[j] > key) { // Shift elements of the sorted subarray that are greater than key
            arr[j + 1] = arr[j]; // Move element one position to the right
            j--; // Move to the previous element
        }
        arr[j + 1] = key; // Insert the key in its correct position
    }
}

void merge(int arr[], int p, int q, int r) {
    int n1 = q - p + 1; // Length of the first subarray
    int n2 = r - q; // Length of the second subarray
    int L[n1], M[n2]; // Temporary arrays to hold subarray elements

    for (int i = 0; i < n1; i++) // Copy elements to L from arr
        L[i] = arr[p + i];
    for (int j = 0; j < n2; j++) // Copy elements to M from arr
        M[j] = arr[q + 1 + j];

    int i = 0, j = 0, k = p; // Initialize indices

    // Merge L and M into arr
    while (i < n1 && j < n2) {
        if (L[i] <= M[j]) { // If current element of L is less than or equal to M
            arr[k] = L[i]; //Task 6
            i++;
        } else {
            arr[k] = M[j]; //task 7
            j++;
        }
        k++;
    }

    // Copy remaining elements of L, if any
    while (i < n1) {
        arr[k] = L[i]; //Task 8
        i++;
        k++;
    }

    // Copy remaining elements of M, if any
    while (j < n2) {
        arr[k] = M[j]; //Task 9
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right) {
    if (right - left + 1 <= THRESHOLD) { // Check if the size of subarray is less than or equal to threshold
        insertionSort(arr, left, right); // Use insertion sort for small subarrays
    } else {
        if (left < right) { //Task 1: If the subarray has more than one element
            int mid = left + (right - left) / 2; //Task 2: Calculate the middle point
            mergeSort(arr, left, mid); //Task 3: Recursively sort the first half
            mergeSort(arr, mid + 1, right); //Task 4: Recursively sort the second half
            merge(arr, left, mid, right); //Task 5: Merge the two sorted halves
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) // Iterate over each element
        cout << arr[i] << " "; // Print the element followed by a space
    cout << endl; // Print a newline at the end
}

int main() {
    int arr[] = {16, 55, 12, -23, 94, 11, 45, 2, -64, 7}; // Initialize the array
    int size = sizeof(arr) / sizeof(arr[0]); // Calculate the size of the array

    cout << "Unsorted array: "; // Print message
    printArray(arr, size); // Print the unsorted array

    mergeSort(arr, 0, size - 1); // Sort the array using merge sort

    cout << "Sorted array: "; // Print message
    printArray(arr, size); // Print the sorted array
    return 0; // Return 0 to indicate successful execution
}