#include <bits/stdc++.h> 
vector<int> findLeaders(vector<int> &elements, int n) {
    vector<int> ans;
    int maxi=INT_MIN;
    // int n=elements.size();
    for(int i=n-1;i>=0;i--){
        if(elements[i]>maxi){
            ans.push_back(elements[i]);
        }
        maxi=max(maxi,elements[i]);
    }
    reverse(ans.begin(),ans.end());
    return ans;
}