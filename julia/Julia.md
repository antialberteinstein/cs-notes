# Giáo trình tự học Ngôn ngữ Julia

Chào mừng bạn đến với Julia! Tài liệu này được tổng hợp từ các file mã nguồn trong quá trình học của bạn, sắp xếp lại thành một giáo trình có cấu trúc để bạn tiện ôn tập và tham khảo.

## 1. Bắt đầu với Julia: Hello, World!

Chương trình đầu tiên trong bất kỳ ngôn ngữ nào cũng là "Hello, World!". Trong Julia, bạn sử dụng hàm `println()` để in một chuỗi ra màn hình.

```julia
println("Hello, World!")
```

## 2. Biến và các Kiểu dữ liệu cơ bản

Julia là một ngôn ngữ có kiểu động (dynamically typed), nhưng bạn cũng có thể chỉ định kiểu dữ liệu một cách tường minh.

- `String`: Chuỗi ký tự
- `Int64`: Số nguyên 64-bit
- `Float64`: Số thực 64-bit
- `Bool`: Kiểu logic (true/false)
- `Char`: Một ký tự duy nhất

```julia
# Các kiểu dữ liệu cơ bản trong Julia
string_var = "Rau ma" # Chuỗi ký tự
int_var = 36 # Số nguyên
float_var = 3.6 # Số thực
bool_var = true # Giá trị boolean
char_var = 'A' # Ký tự

# Dùng hàm typeof() để kiểm tra kiểu dữ liệu
println(typeof(string_var)) # String
println(typeof(int_var))    # Int64
println(typeof(float_var))  # Float64
println(typeof(bool_var))   # Bool
println(typeof(char_var))   # Char
```

## 3. Các phép toán

Julia hỗ trợ đầy đủ các phép toán số học, so sánh, logic và các phép toán trên chuỗi.

```julia
# + (cộng).
# - (trừ).
# * (nhân).
# / (chia) -> kết quả là số thực.
# div(a, b) hoặc a \ b (chia lấy phần nguyên).
# % (chia lấy phần dư).
# ^ (lũy thừa).
# == (bằng).
# != (không bằng).
# < (nhỏ hơn).
# <= (nhỏ hơn hoặc bằng).
# > (lớn hơn).
# >= (lớn hơn hoặc bằng).
# && (và).
# || (hoặc).
# ! (phủ định).


# Nối chuỗi.
str1 = "Rau"
str2 = "ma"
full_str = str1 * " " * str2  # Sử dụng * thay vì + để nối chuỗi.
println(full_str)  # Kết quả: "Rau ma"

# Cách khác để nối chuỗi.
full_str2 = string(str1, " ", str2)
println(full_str2)  # Kết quả: "Rau ma"

# Nội suy chuỗi (String Interpolation).
name = "Rau ma"
age = 36
formatted_str = "Tên: $name, Tuổi: $age"
# Hoặc dùng $(...) để chèn biểu thức phức tạp.
formatted_str2 = "Năm sau, tuổi của tôi sẽ là $(age + 1)."
println(formatted_str)   # Kết quả: "Tên: Rau ma, Tuổi: 36"
println(formatted_str2)  # Kết quả: "Năm sau, tuổi của tôi sẽ là 37."
```

## 4. Câu lệnh điều kiện (If-Else)

Sử dụng `if`, `elseif`, và `else` để điều khiển luồng chương trình.

```julia
if 36 < 92
    println("36 nhỏ hơn 92")
elseif 36 == 92
    println("36 bằng 92")
else
    println("36 lớn hơn 92")
end

# Toán tử ba ngôi (Ternary Operator).
foo = (36 < 92) ? "36 nhỏ hơn 92" : "36 không nhỏ hơn 92"
println("Kết quả của toán tử ba ngôi: $foo")
```

## 5. Vòng lặp (Loops)

Julia cung cấp vòng lặp `for` và `while` để thực hiện các tác vụ lặp đi lặp lại.

```julia
# Vòng lặp for với cú pháp start:end
for i in 1:10
    println("Số hiện tại là: $i")
end

# Vòng lặp for với bước nhảy start:step:end
for i in 1:2:20
    println("Số hiện tại là: $i")
end

# Vòng lặp while
n = 3
while n > 0
    println("Đếm ngược: $n")
    global n = n - 1 # Dùng `global` để thay đổi biến bên ngoài phạm vi vòng lặp
end

# `break` và `continue` cũng được hỗ trợ tương tự các ngôn ngữ khác.
```

## 6. Hàm (Functions)

Hàm là khối mã có thể tái sử dụng. Julia có cú pháp định nghĩa hàm rất linh hoạt.

```julia
# Hàm đầy đủ với từ khóa `function` và `return`.
function add(a, b)
    sum = a + b
    return sum
end

# Hàm rút gọn (hàm lambda).
add_reduced(x, y) = x + y

# Gọi hàm.
result1 = add(10, 20)
result2 = add_reduced(15, 25)

println("Kết quả của hàm đầy đủ: $result1")
println("Kết quả của hàm lambda: $result2")

# Return ngầm định: Julia tự động trả về giá trị của biểu thức cuối cùng trong hàm.
function multiply(a, b)
    a * b  # Không cần từ khóa return
end

# Trả về nhiều giá trị (thực chất là trả về một Tuple).
function test()
    return 1, "Rau ma", true
end
```

## 7. Đa điều phối (Multiple Dispatch)

Đây là một trong những tính năng mạnh mẽ nhất của Julia. Bạn có thể định nghĩa nhiều phiên bản của cùng một hàm với các kiểu tham số khác nhau. Julia sẽ tự động gọi phiên bản hàm phù hợp dựa trên kiểu dữ liệu của các đối số được truyền vào.

```julia
# Định nghĩa hai phiên bản của hàm `add`
function add(a::Int, b::Int)
    println("Đang gọi hàm add cho kiểu Int")
    a + b
end

function add(a::Float64, b::Float64)
    println("Đang gọi hàm add cho kiểu Float64")
    a + b + 0.5
end

# Gọi hàm với các kiểu dữ liệu khác nhau
result_int = add(10, 20)
result_float = add(10.0, 20.0)

println("Kết quả với Int: $result_int")
println("Kết quả với Float64: $result_float")
```

## 8. Các cấu trúc dữ liệu

### 8.1. Mảng (Arrays)

Mảng trong Julia là một tập hợp các phần tử có thứ tự và có thể thay đổi. Chỉ số mảng bắt đầu từ `1`.

```julia
arr = [18, 36, 92] # Tạo một Vector{Int64}

# Truy cập phần tử (chỉ số bắt đầu từ 1).
first_element = arr[1]
last_element = arr[end]

# Kích thước mảng.
array_length = length(arr)

# Thêm/xóa phần tử (thay đổi mảng gốc).
push!(arr, 43) # Thêm vào cuối
pop!(arr)      # Xóa ở cuối

# Các hàm hữu ích.
tong = sum(arr)
tb = mean(arr) # Cần `using Statistics`
is_present = in(36, arr) # Kiểm tra sự tồn tại
```

### 8.2. Tuple và Struct

**Tuple** giống như mảng nhưng là bất biến (`immutable`), không thể thay đổi sau khi tạo. Chúng hiệu quả hơn về hiệu suất và an toàn hơn cho dữ liệu không đổi.

```julia
my_tuple = (10, "Rau ma", true)
```

**Struct** cho phép bạn tạo ra các kiểu dữ liệu phức tạp của riêng mình. Mặc định, struct là bất biến.

```julia
# Struct bất biến (immutable)
struct Person
    name::String
    age::Int64
    city::String
end

jack = Person("Jack", 28, "Ben Tre")
println("Tên: $(jack.name)")

# Để tạo struct có thể thay đổi, dùng từ khóa `mutable`.
mutable struct Car
    brand::String
    model::String
    year::Int64
end

my_car = Car("Toyota", "Camry", 2020)
my_car.year = 2021 # Hợp lệ vì struct là mutable
```

### 8.3. Từ điển (Dictionaries)

Từ điển (`Dict`) lưu trữ dữ liệu dưới dạng các cặp `key-value`.

```julia
sample_dict = Dict(
    "name" => "Alice",
    "age" => 30,
    "city" => "New York"
)

# Truy cập và cập nhật giá trị
city = sample_dict["city"]
sample_dict["name"] = "Bob"

# Thêm phần tử mới
sample_dict["country"] = "USA"

# Kiểm tra sự tồn tại của key
if haskey(sample_dict, "age")
    println("Key 'age' tồn tại.")
end

# Xóa phần tử
pop!(sample_dict, "age")

# Lặp qua từ điển
for key in keys(sample_dict)
    println("Key: $key, Value: $(sample_dict[key])")
end
```

## 9. Broadcasting

Broadcasting cho phép áp dụng một phép toán lên mọi phần tử của một mảng mà không cần viết vòng lặp `for`. Cú pháp là thêm một dấu chấm (`.`) vào trước toán tử hoặc sau tên hàm.

```julia
arr = 1:10

# Thay vì dùng vòng lặp:
# new_arr = zeros(length(arr))
# for i in 1:length(arr)
#     new_arr[i] = arr[i] + 36
# end

# Dùng broadcasting:
new_arr_broadcast = arr .+ 36
squared_arr = sqrt.(arr)

# Julia hợp nhất các phép toán broadcasting thành một vòng lặp duy nhất, rất hiệu quả.
# Ví dụ: y = @. sin(x^2 + 2*x) sẽ được tính toán hiệu quả.
```

## 10. Quản lý Gói (Package Management)

Julia có một trình quản lý gói tích hợp tên là `Pkg`. Để sử dụng, bạn gõ `]` trong REPL của Julia.

```
### 1. Mở REPL
Gõ `julia` trong Terminal.

### 2. Mở chế độ quản lý gói
Trong REPL, gõ `]`:
julia> ]
=>
(@v1.x) pkg> # Chế độ quản lý gói.
# Để thoát, gõ Backspace hoặc Ctrl+C.

### 3. Cài đặt một gói
pkg> add Plots

### 4. Kiểm tra các gói đã cài
pkg> status

### 5. Xóa một gói
pkg> rm Plots

### 6. Cập nhật tất cả các gói
pkg> update
```

## 11. Làm việc với Dữ liệu: Gói DataFrames.jl

`DataFrames.jl` là gói thư viện tiêu chuẩn để làm việc với dữ liệu dạng bảng trong Julia.

```julia
using DataFrames

df = DataFrame(
    "Name" => ["Alice", "Bob", "Charlie"],
    "Age" => [25, 30, 35],
    "City" => ["New York", "Los Angeles", "Chicago"]
)

# Truy cập cột
name_col = df.Name
age_col = df[!, :Age]

# Truy cập hàng
first_row = df[1, :]

# Lọc dữ liệu
over_than_28 = filter(:Age => x -> x > 28, df)

# Thêm cột mới
df.Nationality = ["USA", "Mexico", "USA"]

# Cập nhật cột bằng broadcasting
df.Age = df.Age .+ 1
```

## 12. Vẽ đồ thị: Gói Plots.jl

`Plots.jl` là một gói thư viện mạnh mẽ để tạo ra các loại đồ thị khác nhau.

### 12.1. Đồ thị cơ bản

```julia
using Plots

x = 1:10
y = rand(10)

p = plot(x, y, title="My First Plot", xlabel="X-axis", ylabel="Y-axis")

# Hiển thị đồ thị
display(p)

# Lưu đồ thị ra file
savefig(p, "my_plot.png")
```

### 12.2. Các loại đồ thị khác

```julia
using Plots

# Biểu đồ cột (Bar plot)
x_bar = ["Julia", "Python", "R"]
y_bar = rand(3)
bar(x_bar, y_bar, title="Biểu đồ cột", legend=false)
savefig("bar_plot.png")

# Biểu đồ phân tán (Scatter plot)
x_scatter = rand(50)
y_scatter = rand(50)
scatter(x_scatter, y_scatter, title="Biểu đồ phân tán")
savefig("scatter_plot.png")
```

### 12.3. Đồ thị nâng cao: Vẽ nhiều đường và tùy chỉnh

Bạn có thể vẽ nhiều đường trên cùng một biểu đồ và tùy chỉnh các thuộc tính như độ dày đường (`lw`), nhãn (`label`), vị trí chú giải (`legend`).

```julia
using Plots

x = -10:0.1:10

sigmoid(x) = 1 ./ (1 .+ exp.(-x))
tanh_func(x) = tanh.(x) # tanh đã có sẵn trong Julia

y_sigmoid = sigmoid(x)
y_tanh = tanh_func(x)

# Vẽ đường đầu tiên
p = plot(
    x, y_sigmoid,
    title = "Các hàm kích hoạt",
    label = "sigmoid(x)",
    legend = :topleft,
    lw = 3, # line width
)

# Dùng plot! (với dấu chấm than) để vẽ thêm đường thứ hai vào biểu đồ đã có
plot!(p, x, y_tanh, label = "tanh(x)", lw=3)

savefig(p, "activation_functions.png")
```

## 13. Dự án cuối khóa: Phân tích Doanh thu

Đây là một ví dụ tổng hợp, sử dụng `DataFrames` để xử lý dữ liệu và `Plots` để trực quan hóa kết quả.

```julia
using Plots
using DataFrames

# Dữ liệu ban đầu
MatHang = ["Táo", "Cam", "Chuối", "Táo", "Cam", "Cam"]
SoLuong = [100, 50, 200, 150, 20, 100]
GiaMoiKg = [2.5, 3.0, 1.5, 2.5, 3.0, 3.2]

df = DataFrame(
    "MatHang" => MatHang,
    "SoLuong" => SoLuong,
    "GiaMoiKg" => GiaMoiKg
)

# Tính toán các cột mới
df.GiaBan = df.GiaMoiKg .* 1.1 # Giá bán sau thuế 10%
df.DoanhThu = df.SoLuong .* df.GiaBan

println("Dữ liệu bán hàng chi tiết:")
println(df)

# Nhóm dữ liệu theo mặt hàng và tính tổng doanh thu cho mỗi nhóm
# 1. groupby: Nhóm DataFrame theo cột :MatHang
grouped_df = groupby(df, :MatHang)

# 2. combine: Áp dụng hàm `sum` lên cột :DoanhThu cho mỗi nhóm,
#    và đặt tên cột kết quả là :TongDoanhThu
summary_df = combine(grouped_df, :DoanhThu => sum => :TongDoanhThu)

println("\nTổng doanh thu theo mặt hàng:")
println(summary_df)

# Vẽ biểu đồ cột cho tổng doanh thu
bar(
    summary_df.MatHang,
    summary_df.TongDoanhThu,
    title = "Tổng doanh thu theo mặt hàng",
    xlabel = "Mặt hàng",
    ylabel = "Tổng doanh thu",
    legend = false,
    bar_width = 0.5
)

savefig("doanh_thu_mat_hang.png")
```

Chúc bạn học tốt!
