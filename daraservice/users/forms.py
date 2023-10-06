from typing import Any
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
class SignUpForm(UserCreationForm):
    
    email = forms.EmailField(widget=forms.TextInput(attrs={'class': 'custom-input'}))
    class Meta:
        model = User
        fields = ['username','email','password1','password2']
        username = forms.CharField(widget=forms.TextInput(attrs={'class': 'custom-input'}))
        email = forms.EmailField(widget=forms.TextInput(attrs={'class': 'custom-input'}))

    

    def __init__(self, *args, **kwargs):
        super(SignUpForm,self).__init__(*args, **kwargs)
        for fieldname in ['username','email','password1','password2']:
            self.fields[fieldname].help_text = None
    