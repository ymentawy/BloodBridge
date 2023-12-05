//
//  User.swift
//  SWEBloodBridge
//
//  Created by muhammad abdelmohsen on 18/11/2023.
//

import Foundation
import SwiftUI

struct AuthenticationView: View {
    @State private var isUser = false
    @State private var isInstitution = false
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Text("Welcome").font( .largeTitle).foregroundColor(Color(hue: 1.0, saturation: 1.0, brightness: 0.681)).fontWeight(.heavy)
                Image("lifebridge")
                    .resizable()
                    .padding([.leading, .bottom, .trailing], 20.0)
                    .frame(width: 400, height: 320)
                    .alignmentGuide(.top) { _ in 0 } // Aligns the image at the top
                
                
                
                Button(action: {
                    isUser = true
                }) {
                    Text("I'm a User")
                        .font(.headline)
                        .padding()
                        .background(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(20) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                }
                
                Button(action: {
                    isInstitution = true
                }) {
                    Text("I'm an Institution")
                        .font(.headline)
                        .padding()
                        .background(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(20) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                }
            }
            .navigationBarTitle("")
            .background(
                NavigationLink("", destination: User_View(), isActive: $isUser)
            )
            .background(
                NavigationLink("", destination: InstitutionView(), isActive: $isInstitution)
            )
        }.navigationBarBackButtonHidden(true)
    }
}


struct User_View: View {
    @State private var showNewView  = false
    @State private var showNewView2 = false
    @State private var showNewView3 = false
    
    
    var body: some View {
            VStack(spacing: 10) {
                Image("lifebridge")
                    .resizable()
                    .padding([.leading, .bottom, .trailing], 20.0)
                    .frame(width: 400, height: 320)
                    .alignmentGuide(.top) { _ in 0 } // Aligns the image at the top
                
                NavigationLink(destination: LOGINview(), isActive: $showNewView) {
                    Text("Login")
                        .font(.title3)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 50)
                        .background(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                        .cornerRadius(20) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                        .padding(.horizontal)
                    
                }
                .navigationTitle("")
                
                NavigationLink(destination: SIGNupView(), isActive: $showNewView2) {
                    Text("Not part of LifeBridge?                                Create your Account now")
                        .underline(true)
                        .font(.headline)
                        .fontWeight(.semibold)
                        .foregroundColor(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                        .frame(maxWidth: .infinity)
                        .frame(height: 50)
                        .background(Color.white) // Background color
                        .cornerRadius(20) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                        .padding()
                }
                .navigationTitle(" SignUp ")
                
                NavigationLink(destination: ForgotPassView(), isActive: $showNewView3)
                {
                    Text("Forgot Password?")
                        .font(.custom("Times New Roman", size: 15))
                        .underline(true, color: .black)
                        .foregroundColor(.black)
                        .padding(-3)
                }
                .navigationTitle("")
            }
        
    }


    
}
struct LOGINview: View {
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var showPassword: Bool = false
    @State private var showMainMenu = false

    var body: some View {
        ZStack {
            Image("Image 3")
                                       .resizable()
                                       .scaledToFill()
                                       .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                                       .foregroundColor(Color.red)
                                       .opacity(0.18).padding(.bottom, 60.0)
            
            VStack(spacing: 10) {
                
                HStack(spacing:0) {
                    Text("Welcome Back!")
                        .font(.title2)
                        .fontWeight(.heavy)
                        .foregroundColor(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                }
                .frame(height: 30)
                .padding()
                .background(Color.white) 
                .cornerRadius(20)
                .shadow(color: .black, radius: 5, x: 0, y: 5)
                .padding(.bottom, 50.0)
                
                VStack(spacing: 2) {
                    Text("Enter Your Email:")
                        .fontWeight(.bold)
                        .foregroundColor(.black)
                    
                    TextField("Your Email..", text: $email)
                        .frame(maxWidth: .infinity)
                        .frame(height: 50.0)
                        .padding(.horizontal, 20)
                        .background(Color.white)
                        .cornerRadius(10)
                        .overlay(RoundedRectangle(cornerRadius: 8)
                            .stroke(Color.gray, lineWidth: 1))
                        .padding()
                }
                
                VStack(spacing: 2) {
                        Text("Enter Your Password:")
                            .fontWeight(.bold)
                            .foregroundColor(.black)
                      
                    ZStack{
                        if showPassword {
                            TextField("Your Password..", text: $password)
                                .frame(maxWidth: .infinity)
                                .frame(height: 50.0)
                                .padding(.horizontal, 20)
                                .background(Color.white)
                                .cornerRadius(8)
                                .overlay(RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color.gray, lineWidth: 1))
                                .padding()
                        } else {
                            SecureField("Your Password..", text: $password)
                                .frame(maxWidth: .infinity)
                                .frame(height: 50.0)
                                .padding(.horizontal, 20)
                                .background(Color.white)
                                .cornerRadius(10)
                                .overlay(RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color.gray, lineWidth: 1))
                                .padding()
                        }  
                        Button(action: {
                            showPassword.toggle()
                        }) {
                            Image(systemName: showPassword ? "eye.fill" : "eye.slash.fill")
                                .foregroundColor(.gray)
                                
                        }.padding(.leading, 280)
                    }
                      
                    
                }
                
                Button(action: {
                    showMainMenu = true
                }) {
                    Text("Sign-In")
                        .font(.headline)
                        .padding()
                        .background(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(15)
                        .shadow(color: .gray, radius: 5, x: 0, y: 5)
                }.padding()
            }
        }
        .background(
            NavigationLink("", destination: WelcomeMenu()
                .navigationBarTitle("")
                ,isActive: $showMainMenu)
        )
    }
}




struct SIGNupView: View {
    @State var email: String = ""
    @State var pass: String = ""
    @State private var Confirmpassword: String = ""
    @State var BLOOD = false
    @State var selectedBloodType:String = ""
    @State var showPassword: Bool = false
    
    
    var body: some View {
        ZStack{     Image("Image 3")
                .resizable()
                .scaledToFill()
                .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                .foregroundColor(Color.red)
                .opacity(0.18).padding(.bottom, 60.0)
            VStack(spacing:0) {
                
                HStack(spacing:0) {
                    Text("Save Lives now! ")
                        .font(.title2)
                        .fontWeight(.heavy)
                        .foregroundColor(Color(hue: 1.0, saturation: 1.0, brightness: 0.681)) // Set the color of the first part to black
                
                }
                .frame(height: 30)
                .padding()
                .background(Color.white) // Set the background color to white
                .cornerRadius(20)
                .shadow(color: .black, radius: 5, x: 0, y: 5)
                .padding(.bottom, 50.0)
                
                
                Text("Enter Your Email")
                    .foregroundColor(.black)
                    .font(.headline)
                    .fontWeight(.semibold)
                    .padding(.top, 20)
                
                TextField("Your Email..", text: $email)
                    .frame(maxWidth: /*@START_MENU_TOKEN@*/.infinity/*@END_MENU_TOKEN@*/)
                    .frame(height: 50.0)
                    .padding(.horizontal, 20)
                    .background(Color.white)
                    .cornerRadius(10)
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.gray, lineWidth: 1))
                    .padding()
                
                Text("Enter Your Password")
                    .foregroundColor(.black)
                    .font(.headline)
                    .fontWeight(.semibold)
                
                ZStack{
                    if showPassword {
                        TextField("Your Password..", text: $pass)
                            .frame(maxWidth: .infinity)
                            .frame(height: 50.0)
                            .padding(.horizontal, 20)
                            .background(Color.white)
                            .cornerRadius(8)
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.gray, lineWidth: 1))
                            .padding()
                    } else {
                        SecureField("Your Password..", text: $pass)
                            .frame(maxWidth: .infinity)
                            .frame(height: 50.0)
                            .padding(.horizontal, 20)
                            .background(Color.white)
                            .cornerRadius(10)
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.gray, lineWidth: 1))
                            .padding()
                    }
                    Button(action: {
                        showPassword.toggle()
                    }) {
                        Image(systemName: showPassword ? "eye.fill" : "eye.slash.fill")
                            .foregroundColor(.gray)
                            
                    }.padding(.leading, 280)
                }
                
                Text("Confirm Your Password")
                    .foregroundColor(.black)
                    .font(.headline)
                    .fontWeight(.semibold)
                
                
                ZStack{
                    if showPassword {
                        TextField("Your Password..", text: $Confirmpassword)
                            .frame(maxWidth: .infinity)
                            .frame(height: 50.0)
                            .padding(.horizontal, 20)
                            .background(Color.white)
                            .cornerRadius(8)
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.gray, lineWidth: 1))
                            .padding()
                    } else {
                        SecureField("Your Password..", text: $Confirmpassword)
                            .frame(maxWidth: .infinity)
                            .frame(height: 50.0)
                            .padding(.horizontal, 20)
                            .background(Color.white)
                            .cornerRadius(10)
                            .overlay(RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.gray, lineWidth: 1))
                            .padding()
                    }
                    Button(action: {
                        showPassword.toggle()
                    }) {
                        Image(systemName: showPassword ? "eye.fill" : "eye.slash.fill")
                            .foregroundColor(.gray)
                            
                    }.padding(.leading, 280)
                }
                
                NavigationLink(destination: BloodTypeSelectionView(selectedBloodType:$selectedBloodType), isActive: $BLOOD) {
                    // Button label and styling
                    Text("Next")
                        .font(.custom("Arial", size: 18))
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .padding(.vertical, 10)
                        .padding(.horizontal, 20)
                        .cornerRadius(10)
                        .frame(maxWidth: 130)
                        .frame(height: 50)
                        .background(Color(hue: 1.0, saturation: 1.0, brightness: 0.681)) // Background color
                        .cornerRadius(15) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                    
                }.navigationTitle("").padding()
                
            }
        }
    }
    
}

struct ForgotPassView: View {
    @State var email: String = ""
    @State var ViewPass = false
    
    var body: some View {
        
        VStack {
            Image("Image 2")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .padding()
            Text("Trouble with logging in?")
                .font(.custom("Times New Roman", size: 25))
                .fontWeight(.heavy)
                .padding(.bottom, 20)
                .padding(.horizontal, 20)
                .foregroundColor(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
            
            Text("Enter your email address, phone number, or username, and we'll send you a link to get back into your account")
                .foregroundColor(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                .font(.custom("Times New Roman", size: 15))
                .padding()
            
            TextField("Your Email..", text: $email)
                .frame(width: 250.0, height: 50.0)
                .padding(.horizontal, 20)
                .background(Color.white) // Set background color
                .cornerRadius(8)
                .overlay(RoundedRectangle(cornerRadius: 8).stroke(Color.black, lineWidth: 1))
                .padding(.bottom, 10)
            
            Button(action: {
                // Action to perform when the button is tapped
                print("Link Sent Successfully")
                ViewPass=true
            }) {
                Text("Send Reset Link")
                    .font(.headline)
                    .fontWeight(.bold)
                    .foregroundColor(.white)
                    .padding(.vertical, 10)
                    .padding(.horizontal, 20)
                    .background(Color(hue: 1.0, saturation: 1.0, brightness: 0.681))
                    .cornerRadius(10)
            }
            .padding(.top, 20)
            .alert(isPresented: $ViewPass){
                Alert(
                    title: Text(""),
                    message: Text("Email has been sent successfully")
                )
            }
          
            }
        }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .preferredColorScheme(.light)
        ContentView()
            .preferredColorScheme(.dark)
    }
}
    

